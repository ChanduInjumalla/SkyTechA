import React from "react";

export function SkLogoIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 460"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 939.2,429.9 L 841.8,430.0 L 836.8,428.7 L 787.1,389.7 L 486.6,166.9 L 452.3,143.0 L 415.3,123.4 L 383.5,111.2 L 346.7,103.7 L 289.6,100.2 L 207.6,100.4 L 191.2,103.5 L 179.2,109.7 L 173.8,114.8 L 167.3,124.1 L 162.4,144.5 L 162.7,156.9 L 165.5,169.4 L 174.3,183.8 L 187.7,192.8 L 207.1,197.3 L 418.8,198.2 L 443.2,202.8 L 471.5,214.6 L 487.9,226.5 L 499.0,239.5 L 506.6,251.9 L 514.7,273.9 L 518.0,294.1 L 518.5,324.5 L 514.5,348.8 L 507.1,369.2 L 492.8,391.1 L 475.0,407.5 L 451.6,420.1 L 423.3,427.9 L 400.4,429.8 L 125.5,429.3 L 60.4,364.2 L 59.2,361.7 L 60.9,360.0 L 403.4,359.5 L 418.8,356.5 L 428.8,352.2 L 442.6,339.9 L 447.1,332.7 L 451.1,322.1 L 452.3,301.6 L 450.7,290.2 L 442.5,274.3 L 433.7,266.3 L 416.3,258.3 L 395.0,256.4 L 202.1,256.0 L 177.7,252.8 L 144.4,240.5 L 127.0,228.5 L 115.3,216.6 L 103.0,198.2 L 94.9,180.3 L 90.3,158.9 L 89.9,132.1 L 92.0,116.2 L 98.7,94.4 L 111.1,73.4 L 128.0,56.4 L 141.0,47.8 L 156.6,40.1 L 182.7,32.4 L 207.1,30.4 L 316.9,30.0 L 346.2,31.3 L 375.6,35.0 L 419.8,47.9 L 439.2,56.2 L 466.7,71.5 L 497.3,91.5 L 616.1,181.3 L 618.6,181.9 L 827.4,31.5 L 835.3,30.2 L 931.3,30.4 L 932.6,31.7 L 932.0,33.7 L 921.3,42.0 L 679.3,222.1 L 677.4,225.0 L 678.8,228.0 L 684.2,232.5 L 939.2,425.4 L 940.8,428.3 L 939.2,429.9 Z"
        fillRule="evenodd"
      />
    </svg>
  );
}

interface BrandBadgeProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function BrandBadge({ size = "md", className = "" }: BrandBadgeProps) {
  const sizeClasses = {
    sm: "w-7 h-7 rounded-lg p-1",
    md: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl p-1.5",
    lg: "w-12 h-12 rounded-2xl p-2",
  };

  return (
    <div
      className={`relative shrink-0 flex items-center justify-center bg-[#121212] border border-black/15 shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#E23744]/40 group-hover:shadow-[0_4px_14px_rgba(226,55,68,0.22)] ${sizeClasses[size]} ${className}`}
    >
      <SkLogoIcon className="w-full h-full text-white group-hover:text-white transition-colors" />
    </div>
  );
}

export default BrandBadge;

