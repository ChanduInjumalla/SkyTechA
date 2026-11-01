"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Layers, RotateCcw, Sparkles } from "lucide-react";
import SpecBadge from "@/components/ui/SpecBadge";

interface MaterialPreset {
  id: string;
  name: string;
  frameColor: number;
  roughness: number;
  metalness: number;
  accentColor: string;
  label: string;
}

const MATERIAL_PRESETS: MaterialPreset[] = [
  {
    id: "domal-black",
    name: "Domal Obsidian Black",
    frameColor: 0x181c22,
    roughness: 0.35,
    metalness: 0.75,
    accentColor: "#181C22",
    label: "Anodized Architectural Finish",
  },
  {
    id: "champagne-brass",
    name: "Brushed Champagne Gold",
    frameColor: 0xc5a880,
    roughness: 0.28,
    metalness: 0.85,
    accentColor: "#C5A880",
    label: "Luxury Interior Grade",
  },
  {
    id: "anodized-silver",
    name: "Alloy 6063-T6 Silver",
    frameColor: 0x98a3ab,
    roughness: 0.3,
    metalness: 0.9,
    accentColor: "#98A3AB",
    label: "Aerospace Structural Grade",
  },
  {
    id: "pine-teal",
    name: "Architectural Pine Teal",
    frameColor: 0x193b2e,
    roughness: 0.4,
    metalness: 0.65,
    accentColor: "#193B2E",
    label: "Custom Electrostatic Powder Coat",
  },
];

export default function Hero3DStage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialPreset>(MATERIAL_PRESETS[0]);
  const [isRotating, setIsRotating] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  // References for Three.js state
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameGroupRef = useRef<THREE.Group | null>(null);
  const frameMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);
  const targetRotation = useRef({ x: 0.1, y: -0.25 });
  const currentRotation = useRef({ x: 0.1, y: -0.25 });
  const isDragging = useRef(false);
  const previousPointerPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Initialize Three.js Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth;
    const height = container.clientHeight || 480;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.8);
    cameraRef.current = camera;

    // Safe WebGL context probe
    try {
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      rendererRef.current = renderer;
    } catch {
      setWebglSupported(false);
      return;
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xfff5ea, 2.8);
    directionalLight1.position.set(5, 7, 6);
    scene.add(directionalLight1);

    const rimLight = new THREE.DirectionalLight(0xc5a880, 2.0);
    rimLight.position.set(-6, -4, -3);
    scene.add(rimLight);

    const pointLight = new THREE.PointLight(0xaad4f5, 1.5, 15);
    pointLight.position.set(0, 3, 3);
    scene.add(pointLight);

    // Assembly Group
    const assemblyGroup = new THREE.Group();
    frameGroupRef.current = assemblyGroup;
    scene.add(assemblyGroup);

    // Create Architectural Window & Profile Geometry
    // Materials
    const frameMaterial = new THREE.MeshStandardMaterial({
      color: selectedMaterial.frameColor,
      roughness: selectedMaterial.roughness,
      metalness: selectedMaterial.metalness,
    });
    frameMaterialsRef.current = [frameMaterial];

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xebf3f7,
      transparent: true,
      opacity: 0.38,
      roughness: 0.08,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.52,
      reflectivity: 0.7,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    });

    const trackMaterial = new THREE.MeshStandardMaterial({
      color: 0x76828b,
      roughness: 0.25,
      metalness: 0.9,
    });

    // 1. Outer Frame (Top, Bottom, Left, Right)
    const frameWidth = 4.2;
    const frameHeight = 3.2;
    const profileDepth = 0.45; // 45mm scaled
    const profileThickness = 0.16;

    // Top Beam
    const topBeamGeom = new THREE.BoxGeometry(frameWidth, profileThickness, profileDepth);
    const topBeam = new THREE.Mesh(topBeamGeom, frameMaterial);
    topBeam.position.set(0, frameHeight / 2 - profileThickness / 2, 0);
    assemblyGroup.add(topBeam);

    // Bottom Rail / Sill Track
    const bottomTrackGeom = new THREE.BoxGeometry(frameWidth, profileThickness * 1.4, profileDepth * 1.15);
    const bottomTrack = new THREE.Mesh(bottomTrackGeom, trackMaterial);
    bottomTrack.position.set(0, -frameHeight / 2 + profileThickness / 2, 0.02);
    assemblyGroup.add(bottomTrack);

    // Track Guide Insets (Dual Track Rails)
    const railGeom = new THREE.BoxGeometry(frameWidth - 0.2, 0.03, 0.04);
    const rail1 = new THREE.Mesh(railGeom, frameMaterial);
    rail1.position.set(0, -frameHeight / 2 + profileThickness * 1.1, -0.08);
    const rail2 = new THREE.Mesh(railGeom, frameMaterial);
    rail2.position.set(0, -frameHeight / 2 + profileThickness * 1.1, 0.08);
    assemblyGroup.add(rail1, rail2);

    // Left Jamb
    const leftJambGeom = new THREE.BoxGeometry(profileThickness, frameHeight - profileThickness * 2, profileDepth);
    const leftJamb = new THREE.Mesh(leftJambGeom, frameMaterial);
    leftJamb.position.set(-frameWidth / 2 + profileThickness / 2, 0, 0);
    assemblyGroup.add(leftJamb);

    // Right Jamb
    const rightJamb = leftJamb.clone();
    rightJamb.position.set(frameWidth / 2 - profileThickness / 2, 0, 0);
    assemblyGroup.add(rightJamb);

    // 2. Sliding Sash (Pane A - Fixed/Left)
    const sashAWidth = frameWidth / 2 + 0.08;
    const sashAHeight = frameHeight - profileThickness * 2.2;
    const sashGroupA = new THREE.Group();
    sashGroupA.position.set(-frameWidth / 4 + 0.04, 0, -0.08);

    // Glass Pane A (12mm scale)
    const glassAGeom = new THREE.BoxGeometry(sashAWidth - 0.22, sashAHeight - 0.22, 0.06);
    const glassA = new THREE.Mesh(glassAGeom, glassMaterial);
    sashGroupA.add(glassA);

    // Sash A Inner Border
    const sashBorderMat = frameMaterial;
    const sashTopA = new THREE.Mesh(new THREE.BoxGeometry(sashAWidth, 0.12, 0.22), sashBorderMat);
    sashTopA.position.set(0, sashAHeight / 2 - 0.06, 0);
    const sashBottomA = new THREE.Mesh(new THREE.BoxGeometry(sashAWidth, 0.14, 0.22), sashBorderMat);
    sashBottomA.position.set(0, -sashAHeight / 2 + 0.07, 0);
    const sashLeftA = new THREE.Mesh(new THREE.BoxGeometry(0.12, sashAHeight, 0.22), sashBorderMat);
    sashLeftA.position.set(-sashAWidth / 2 + 0.06, 0, 0);
    const sashRightA = new THREE.Mesh(new THREE.BoxGeometry(0.12, sashAHeight, 0.22), sashBorderMat);
    sashRightA.position.set(sashAWidth / 2 - 0.06, 0, 0);
    sashGroupA.add(sashTopA, sashBottomA, sashLeftA, sashRightA);
    assemblyGroup.add(sashGroupA);

    // 3. Sliding Sash (Pane B - Active/Right)
    const sashGroupB = new THREE.Group();
    sashGroupB.position.set(frameWidth / 4 - 0.04, 0, 0.08);

    const glassBGeom = new THREE.BoxGeometry(sashAWidth - 0.22, sashAHeight - 0.22, 0.06);
    const glassB = new THREE.Mesh(glassBGeom, glassMaterial);
    sashGroupB.add(glassB);

    const sashTopB = new THREE.Mesh(new THREE.BoxGeometry(sashAWidth, 0.12, 0.22), sashBorderMat);
    sashTopB.position.set(0, sashAHeight / 2 - 0.06, 0);
    const sashBottomB = new THREE.Mesh(new THREE.BoxGeometry(sashAWidth, 0.14, 0.22), sashBorderMat);
    sashBottomB.position.set(0, -sashAHeight / 2 + 0.07, 0);
    const sashLeftB = new THREE.Mesh(new THREE.BoxGeometry(0.12, sashAHeight, 0.22), sashBorderMat);
    sashLeftB.position.set(-sashAWidth / 2 + 0.06, 0, 0);
    const sashRightB = new THREE.Mesh(new THREE.BoxGeometry(0.12, sashAHeight, 0.22), sashBorderMat);
    sashRightB.position.set(sashAWidth / 2 - 0.06, 0, 0);
    sashGroupB.add(sashTopB, sashBottomB, sashLeftB, sashRightB);

    // Handle Hardware detail on Sash B
    const handleGeom = new THREE.CylinderGeometry(0.015, 0.015, 0.45, 16);
    const handleMat = new THREE.MeshStandardMaterial({ color: 0xc5a880, metalness: 0.95, roughness: 0.2 });
    const handle = new THREE.Mesh(handleGeom, handleMat);
    handle.position.set(-sashAWidth / 2 + 0.16, 0, 0.15);
    sashGroupB.add(handle);

    assemblyGroup.add(sashGroupB);

    // Base Floating Shadow Plane
    const shadowGeom = new THREE.PlaneGeometry(5.4, 2.2);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x050709,
      transparent: true,
      opacity: 0.45,
    });
    const shadowPlane = new THREE.Mesh(shadowGeom, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.set(0, -frameHeight / 2 - 0.12, 0);
    scene.add(shadowPlane);

    // Pointer Move Handler (Desktop Parallax)
    const handlePointerMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging.current) {
        const deltaX = e.clientX - previousPointerPosition.current.x;
        const deltaY = e.clientY - previousPointerPosition.current.y;
        targetRotation.current.y += deltaX * 0.008;
        targetRotation.current.x += deltaY * 0.008;
        previousPointerPosition.current = { x: e.clientX, y: e.clientY };
      } else {
        // Restrained subtle pointer tilt (2 to 4 degrees max)
        targetRotation.current.y = -0.25 + x * 0.15;
        targetRotation.current.x = 0.1 - y * 0.1;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      setIsRotating(true);
      previousPointerPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      setIsRotating(false);
    };

    // Touch handlers for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging.current = true;
        setIsRotating(true);
        previousPointerPosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging.current && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousPointerPosition.current.x;
        const deltaY = e.touches[0].clientY - previousPointerPosition.current.y;
        targetRotation.current.y += deltaX * 0.01;
        targetRotation.current.x += deltaY * 0.01;
        previousPointerPosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
      setIsRotating(false);
    };

    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 480;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let isVisible = true;

    // Intersection Observer to suspend offscreen rendering
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      // Smooth interpolation for heavy architectural feel
      const ease = 0.08;
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * ease;
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * ease;

      // Clamp X rotation to prevent flipping upside down
      currentRotation.current.x = Math.max(-0.4, Math.min(0.4, currentRotation.current.x));

      if (assemblyGroup) {
        assemblyGroup.rotation.x = currentRotation.current.x;
        assemblyGroup.rotation.y = currentRotation.current.y;

        // Subtle breathing float if not dragged
        if (!isDragging.current && !prefersReducedMotion) {
          assemblyGroup.position.y = Math.sin(Date.now() * 0.001) * 0.04;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handlePointerMove);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      renderer.dispose();
    };
  }, []);

  // Update material preset on active frame materials
  useEffect(() => {
    if (frameMaterialsRef.current.length > 0) {
      frameMaterialsRef.current.forEach((mat) => {
        mat.color.setHex(selectedMaterial.frameColor);
        mat.roughness = selectedMaterial.roughness;
        mat.metalness = selectedMaterial.metalness;
        mat.needsUpdate = true;
      });
    }
  }, [selectedMaterial]);

  const resetView = () => {
    targetRotation.current = { x: 0.1, y: -0.25 };
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center select-none" ref={containerRef}>
      {/* 3D Canvas Stage */}
      <div className="relative w-full h-[400px] sm:h-[460px] lg:h-[500px] rounded-xs border border-white/10 bg-gradient-to-b from-[#141A22]/90 via-[#0F141A]/95 to-[#090C0F] overflow-hidden flex items-center justify-center shadow-2xl">
        {/* Subtle Architectural Grid Background */}
        <div className="absolute inset-0 architectural-grid-bg opacity-30 pointer-events-none" />

        {/* Technical Coordinate Overlay Lines */}
        <div className="absolute top-4 left-4 flex flex-col gap-1 pointer-events-none z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#BAC7CF]">
              3D Profile Stage • Hayathnagar Assembly
            </span>
          </div>
          <span className="text-[9px] font-mono text-[#76848E]">
            Model: Domal Series 45mm • Glazing: 12mm Low-Iron
          </span>
        </div>

        {/* Reset Angle Button */}
        <button
          onClick={resetView}
          className="absolute top-4 right-4 z-10 p-2 rounded-xs bg-[#1A222C]/80 hover:bg-[#25303E] border border-white/15 text-[#BAC7CF] hover:text-[#C5A880] text-xs transition-colors flex items-center gap-1.5 font-mono"
          title="Reset Stage View"
        >
          <RotateCcw className="w-3 h-3" />
          <span className="hidden sm:inline text-[10px]">Reset</span>
        </button>

        {/* Spec Callout Badges on Stage Corners */}
        <div className="absolute bottom-4 left-4 z-10 flex flex-wrap gap-2 pointer-events-none">
          <SpecBadge variant="gold" size="xs">
            45mm Depth
          </SpecBadge>
          <SpecBadge variant="teal" size="xs">
            Acoustic Seal
          </SpecBadge>
          <SpecBadge variant="metal" size="xs">
            Toughened 12mm
          </SpecBadge>
        </div>

        {/* Drag Hint */}
        <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-[#76848E] pointer-events-none">
          <Layers className="w-3 h-3 text-[#C5A880]" />
          <span>{isRotating ? "Orbiting..." : "Drag to inspect depth"}</span>
        </div>

        {/* Actual Three.js WebGL Canvas */}
        {webglSupported ? (
          <canvas
            ref={canvasRef}
            className="w-full h-full cursor-grab active:cursor-grabbing block"
          />
        ) : (
          /* Graceful Fallback for No WebGL */
          <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="w-48 h-36 border-2 border-[#C5A880] rounded-xs bg-white/5 flex items-center justify-center relative">
              <div className="w-36 h-28 border border-white/30 flex items-center justify-center">
                <span className="font-mono text-xs text-[#C5A880]">45mm Extrusion</span>
              </div>
            </div>
            <p className="text-xs text-[#BAC7CF]">
              Architectural Profile Assembly (Hardware Acceleration Disabled)
            </p>
          </div>
        )}
      </div>

      {/* Interactive Architectural Material Switcher */}
      <div className="w-full mt-4 p-3 bg-[#121820] border border-white/10 rounded-xs">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#BAC7CF] flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#C5A880]" />
            <span>Interactive Extrusion Finish</span>
          </span>
          <span className="text-[10px] font-mono text-[#C5A880]">
            {selectedMaterial.label}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {MATERIAL_PRESETS.map((preset) => {
            const isSelected = selectedMaterial.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => setSelectedMaterial(preset)}
                className={`flex items-center gap-2 p-2 rounded-xs border text-left transition-all ${
                  isSelected
                    ? "bg-[#1E2632] border-[#C5A880] shadow-[0_0_12px_rgba(197,168,128,0.2)]"
                    : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full shrink-0 border border-white/20"
                  style={{ backgroundColor: preset.accentColor }}
                />
                <span className="text-[11px] font-medium text-white truncate">
                  {preset.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
