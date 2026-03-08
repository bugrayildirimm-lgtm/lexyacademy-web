"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import s from "./styles.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={s.nav} style={scrolled ? { boxShadow: "0 1px 12px rgba(0,0,0,0.06)" } : {}}>
      <Link href="/" className={s.navLogo}>
        <div className={s.navLogoMark}>L</div>
        <div className={s.navLogoName}>Lexy<span>Academy</span></div>
      </Link>
      <div className={s.navLinks}>
        <Link href="#how-it-works">How it works</Link>
        <Link href="#courses">Courses</Link>
        <Link href="#pricing">Pricing</Link>
      </div>
      <div className={s.navActions}>
        <button className={s.navLogin}>Login</button>
        <button className={s.navCta}>Get Started</button>
      </div>
    </nav>
  );
}
