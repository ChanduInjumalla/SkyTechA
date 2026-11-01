import React from "react";

interface SpecBadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "metal" | "teal" | "neutral" | "red";
  size?: "xs" | "sm";
  className?: string;
  icon?: React.ReactNode;
}

export default function SpecBadge({
  children,
  variant = "red",
  size = "sm",
  className = "",
  icon,
}: SpecBadgeProps) {
  const sizeStyles = {
    xs: "text-[10px] px-2 py-0.5",
    sm: "text-xs px-2.5 py-1",
  };

  const variantStyles = {
    red: "bg-[#FDF2F3] text-[#E23744] border border-[#FAD2D5] font-semibold",
    gold: "bg-[#FFF8E6] text-[#B8860B] border border-[#FFE8A3] font-semibold",
    metal: "bg-[#F4F5F7] text-[#4A4A4A] border border-[#E2E4E8] font-medium",
    teal: "bg-[#E6F7F2] text-[#0D7A68] border border-[#BCE8DD] font-semibold",
    neutral: "bg-gray-100 text-gray-700 border border-gray-200 font-medium",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full select-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
