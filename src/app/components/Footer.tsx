import Link from "next/link";
import s from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerGrid}>
        <div>
          <div className={s.footerLogo}>
            <div className={s.footerLogoMark}>L</div>
            <div className={s.footerLogoName}>Lexy<span>Academy</span></div>
          </div>
          <p className={s.footerDesc}>
            Expert compliance training for gaming, finance, and global regulated industries.
            Train your team. Stay compliant. Get certified.
          </p>
        </div>
        <div>
          <div className={s.footerColTitle}>Platform</div>
          <ul className={s.footerLinks}>
            {["Courses", "Pricing", "For Teams", "Certificates"].map((item) => (
              <li key={item}><Link href="#">{item}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className={s.footerColTitle}>Company</div>
          <ul className={s.footerLinks}>
            {["About", "Contact", "Privacy Policy", "Terms of Use"].map((item) => (
              <li key={item}><Link href="#">{item}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.footerBottom}>
        <p>© 2025 LexyAcademy. All rights reserved.</p>
        <div className={s.footerTag}>
          <div className={s.footerDot} />
          AI-powered compliance training platform
        </div>
      </div>
    </footer>
  );
}
