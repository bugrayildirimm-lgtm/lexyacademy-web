"use client";

export default function TrustBar() {
  const industries = [
    "Online Gaming",
    "Finance & Banking",
    "Fintech",
    "Real Estate",
    "Crypto & Web3",
    "Insurance",
    "iGaming Operators",
    "Payment Providers",
  ];

  return (
    <section className="border-y border-white/5 bg-[#0d1220] py-5 overflow-hidden">
      <div className="flex items-center gap-3 text-sm text-[#8B9AB0] mb-1 px-6 max-w-6xl mx-auto">
        <div className="gold-line" />
        <span className="text-xs tracking-widest uppercase text-[#C9A84C]/70">Trusted across industries</span>
      </div>
      <div className="relative overflow-hidden mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0d1220] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0d1220] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 whitespace-nowrap" style={{ animation: "scroll 20s linear infinite" }}>
          {[...industries, ...industries].map((item, i) => (
            <span key={i} className="text-[#8B9AB0] text-sm font-medium inline-flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-[#C9A84C]/40 inline-block" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
