"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0F1E]/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#C9A84C] flex items-center justify-center">
            <span className="font-display text-[#0A0F1E] font-bold text-sm">L</span>
          </div>
          <span className="font-display text-white text-lg tracking-wide">
            Lexy<span className="text-[#C9A84C]">Academy</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#courses" className="text-sm text-[#8B9AB0] hover:text-white transition-colors">Courses</Link>
          <Link href="#how-it-works" className="text-sm text-[#8B9AB0] hover:text-white transition-colors">How it works</Link>
          <Link href="#pricing" className="text-sm text-[#8B9AB0] hover:text-white transition-colors">Pricing</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm text-[#8B9AB0] hover:text-white transition-colors px-4 py-2">
            Login
          </Link>
          <Link
            href="/register"
            className="bg-[#C9A84C] text-[#0A0F1E] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#E8C96A] transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#111827] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          <Link href="#courses" className="text-sm text-[#8B9AB0]" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link href="#how-it-works" className="text-sm text-[#8B9AB0]" onClick={() => setMenuOpen(false)}>How it works</Link>
          <Link href="#pricing" className="text-sm text-[#8B9AB0]" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link href="/register" className="bg-[#C9A84C] text-[#0A0F1E] font-semibold text-sm px-5 py-2.5 rounded-lg text-center">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
