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
    highlight: "bg-gradient-to-br from-blue-50 to-green-50 border border-blue-200",
  };
  const hoverStyles = hoverable ? "hover:shadow-lg hover:border-blue-400 transition-all" : "";

  return (
    <div className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
