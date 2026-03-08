"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#0d1628] to-[#0A0F1E]" />

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/5 blur-[100px] pointer-events-none" />

      {/* Decorative corner lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 right-24 w-px h-32 bg-gradient-to-b from-[#C9A84C]/30 to-transparent" />
        <div className="absolute top-24 right-24 w-32 h-px bg-gradient-to-r from-[#C9A84C]/30 to-transparent" />
        <div className="absolute bottom-32 left-16 w-px h-24 bg-gradient-to-t from-[#C9A84C]/20 to-transparent" />
        <div className="absolute bottom-32 left-16 w-24 h-px bg-gradient-to-r from-[#C9A84C]/20 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full px-4 py-1.5 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]"></div>
          <span className="text-[#C9A84C] text-xs font-medium tracking-widest uppercase">
            AI-Powered Compliance Training
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
          Train Smarter.
          <br />
          <span className="text-[#C9A84C]">Stay Compliant.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[#8B9AB0] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Expert-built compliance courses in AML, GDPR, Responsible Gambling and KYC.
          Train your team, track progress, and issue certificates — all in one place.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="/register"
            className="bg-[#C9A84C] text-[#0A0F1E] font-semibold px-8 py-4 rounded-xl text-base hover:bg-[#E8C96A] transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Start Training Today
          </Link>
          <Link
            href="#courses"
            className="border border-[#C9A84C]/40 text-[#C9A84C] font-medium px-8 py-4 rounded-xl text-base hover:border-[#C9A84C] hover:bg-[#C9A84C]/8 transition-all"
          >
            Explore Courses
          </Link>
        </div>

        {/* Trust points */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#8B9AB0] mb-16">
          <span className="flex items-center gap-2">
            <span className="text-[#C9A84C]">✓</span> Regulator-aligned content
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#C9A84C]">✓</span> PDF certificates issued instantly
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#C9A84C]">✓</span> Built for gaming, finance & fintech
          </span>
        </div>

        {/* Certificate card */}
        <div className="max-w-sm mx-auto">
          <div className="relative bg-[#111827] border border-[#C9A84C]/20 rounded-2xl p-6 text-left shadow-[0_0_40px_rgba(201,168,76,0.12)]">
            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#C9A84C]/40" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#C9A84C]/40" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#C9A84C]/40" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#C9A84C]/40" />

            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#C9A84C] text-xs font-medium tracking-widest uppercase">📋 Certificate of Completion</span>
            </div>
            <p className="font-display text-white text-lg mb-1">AML Fundamentals</p>
            <p className="text-[#8B9AB0] text-sm mb-4">
              Awarded to <span className="text-white">Ryan M.</span>
            </p>
            <div className="flex items-center justify-between text-xs text-[#8B9AB0]">
              <span>LexyAcademy · 2025</span>
              <span className="text-[#C9A84C]">Verified ✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
