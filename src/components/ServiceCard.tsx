"use client";

import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  cardBg: string;
  iconBg: string;
}

export default function ServiceCard({ title, description, icon, cardBg, iconBg }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group rounded-2xl p-7 flex flex-col border border-transparent hover:border-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default h-full"
      style={{ backgroundColor: cardBg }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-8 shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>
      <h3
        className="text-lg font-bold mb-3 leading-snug transition-colors duration-300"
        style={{ color: hovered ? iconBg : "#111827" }}
      >
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
    </div>
  );
}
