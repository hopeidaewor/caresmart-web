interface HorizontalDividerProps {
  variant?: "light" | "gradient";
  className?: string;
}

export default function HorizontalDivider({
  variant = "gradient",
  className = "",
}: HorizontalDividerProps) {
  const variants = {
    light: "bg-gray-200",
    gradient: "bg-gradient-to-r from-blue-500 via-green-500 to-transparent",
  };

  return (
    <div className={`h-1 ${variants[variant]} ${className}`} />
  );
}
