import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  arrow?: boolean;
}

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  type = "button",
  disabled = false,
  arrow = true,
}: ButtonProps) {
  // Base: NO overflow-hidden on the button itself — only on inner clip areas
  const baseStyles =
    "group font-semibold rounded-full inline-flex items-center justify-center gap-2 tracking-wide transition-colors duration-300 disabled:opacity-50";

  const variantClass = "bg-[#1C93D1] hover:bg-[#8EDD8E] text-white shadow-sm";

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const buttonClass = `${baseStyles} ${variantClass} ${sizes[size]} ${className}`;

  const content = (
    <>
      {/* Text clip area — height must equal exactly one line of text */}
      <span
        className="relative overflow-hidden block"
        style={{ height: "1.5em", lineHeight: "1.5" }}
      >
        {/* Default text — slides up out on hover */}
        <span
          className="block transition-transform duration-300 ease-out group-hover:-translate-y-full"
          style={{ lineHeight: "1.5" }}
        >
          {children}
        </span>
        {/* Hover text — starts below, slides up into view */}
        <span
          className="absolute inset-x-0 top-full transition-transform duration-300 ease-out group-hover:-translate-y-full group-hover:text-[#2d2d2c]"
          style={{ lineHeight: "1.5" }}
        >
          {children}
        </span>
      </span>

      {/* Arrow clip area */}
      {arrow && (
        <span
          className="relative overflow-hidden flex-shrink-0"
          style={{ width: 16, height: 16 }}
        >
          {/* Default arrow — slides right out */}
          <ArrowIcon className="absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-x-6" />
          {/* Hover arrow — slides in from left */}
          <ArrowIcon className="absolute inset-0 -translate-x-6 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:text-[#2d2d2c]" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={buttonClass}>
      {content}
    </button>
  );
}
