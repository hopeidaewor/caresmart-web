"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CaresmartLogo from "./CaresmartLogo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <CaresmartLogo size="default" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.href === "/careers" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm transition-colors duration-300 overflow-hidden"
                  style={{ backgroundColor: "#CBFF4D", color: "#0a1416" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#b8f000")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#CBFF4D")}
                >
                  <span className="relative overflow-hidden block" style={{ height: "1.5em", lineHeight: "1.5" }}>
                    <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full" style={{ lineHeight: "1.5" }}>We&apos;re Hiring</span>
                    <span className="absolute inset-x-0 top-full transition-transform duration-300 ease-out group-hover:-translate-y-full" style={{ lineHeight: "1.5" }}>We&apos;re Hiring</span>
                  </span>
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-[#1C93D1] border-b-2 border-[#1C93D1]"
                      : "text-gray-700 hover:text-[#1C93D1]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-gray-900 transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-gray-900 transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-gray-900 transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 px-4 font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-[#1C93D1] bg-[#EBF6FD]"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
