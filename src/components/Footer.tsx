import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d1220] border-t border-white/5 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#C9A84C] flex items-center justify-center">
                <span className="font-display text-[#0A0F1E] font-bold text-xs">L</span>
              </div>
              <span className="font-display text-white text-base tracking-wide">
                Lexy<span className="text-[#C9A84C]">Academy</span>
              </span>
            </div>
            <p className="text-[#8B9AB0] text-sm leading-relaxed max-w-xs">
              Expert compliance training for gaming, finance, and global regulated industries. 
              Train your team. Stay compliant. Get certified.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Platform</h4>
            <ul className="flex flex-col gap-2.5">
              {["Courses", "Pricing", "For Teams", "Certificates"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#8B9AB0] text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {["About", "Contact", "Privacy Policy", "Terms of Use"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#8B9AB0] text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8B9AB0] text-xs">
            © 2025 LexyAcademy. All rights reserved.
          </p>
          <p className="text-[#8B9AB0] text-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            AI-powered compliance training platform
          </p>
        </div>
      </div>
    </footer>
  );
}
