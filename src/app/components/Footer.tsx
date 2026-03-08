import Link from "next/link";
import s from "./styles.module.css";

type FooterData = {
  description: string;
  platformLinks: string[];
  companyLinks: string[];
  copyright: string;
  tagline: string;
};

const fallback: FooterData = {
  description: "Expert compliance training for gaming, finance, and global regulated industries. Train your team. Stay compliant. Get certified.",
  platformLinks: ["Courses", "Pricing", "For Teams", "Certificates"],
  companyLinks: ["About", "Contact", "Privacy Policy", "Terms of Use"],
  copyright: "© 2025 LexyAcademy. All rights reserved.",
  tagline: "AI-powered compliance training platform",
};

export default function Footer({ data }: { data?: FooterData }) {
  const d = data || fallback;

  return (
    <footer className={s.footer}>
      <div className={s.footerGrid}>
        <div>
          <div className={s.footerLogo}>
            <div className={s.footerLogoMark}>L</div>
            <div className={s.footerLogoName}>Lexy<span>Academy</span></div>
          </div>
          <p className={s.footerDesc}>{d.description}</p>
        </div>
        <div>
          <div className={s.footerColTitle}>Platform</div>
          <ul className={s.footerLinks}>
            {d.platformLinks.map((item) => (
              <li key={item}><Link href="#">{item}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className={s.footerColTitle}>Company</div>
          <ul className={s.footerLinks}>
            {d.companyLinks.map((item) => (
              <li key={item}><Link href="#">{item}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.footerBottom}>
        <p>{d.copyright}</p>
        <div className={s.footerTag}>
          <div className={s.footerDot} />
          {d.tagline}
        </div>
      </div>
    </footer>
  );
}
