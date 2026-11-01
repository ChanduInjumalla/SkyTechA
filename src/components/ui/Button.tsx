import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "phone" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  className = "",
  onClick,
  icon,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-normal rounded-full";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-xs sm:text-sm px-5 py-2.5 gap-2 font-semibold",
    lg: "text-sm sm:text-base px-7 py-3.5 gap-2.5 font-bold shadow-md",
  };

  const variantStyles = {
    primary:
      "bg-[#E23744] hover:bg-[#C92531] active:bg-[#B31D28] text-white shadow-[0_4px_14px_rgba(226,55,68,0.28)] uppercase tracking-wider text-xs",
    secondary:
      "bg-white hover:bg-[#F8F9FA] active:bg-[#F0F2F5] text-[#1F1F1F] border border-[#E0E0E0] shadow-xs",
    outline:
      "bg-transparent hover:bg-[#FDF2F3] text-[#E23744] border border-[#E23744] active:bg-[#FCE8EA]",
    whatsapp:
      "bg-[#25D366] hover:bg-[#20BA5A] active:bg-[#1DA851] text-white shadow-[0_4px_14px_rgba(37,211,102,0.3)]",
    phone:
      "bg-[#1F1F1F] hover:bg-[#333333] active:bg-[#0A0A0A] text-white shadow-xs",
    ghost:
      "bg-transparent hover:bg-black/5 text-[#4A4A4A] hover:text-[#1F1F1F] border-transparent",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (isExternal || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={combinedClasses}
          onClick={onClick}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      onClick={onClick}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
