import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "highlight";
  hoverable?: boolean;
}

export default function Card({
  children,
  className = "",
  variant = "default",
  hoverable = false,
}: CardProps) {
  const baseStyles = "rounded-lg p-6";
  const variants = {
    default: "bg-white border border-gray-200",
    highlight: "bg-gradient-to-br from-[#EBF6FD] to-green-50 border border-[#A3D7F5]",
  };
  const hoverStyles = hoverable ? "hover:shadow-lg hover:border-[#1C93D1] transition-all" : "";

  return (
    <div className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
