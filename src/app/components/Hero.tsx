import Link from "next/link";
import s from "./styles.module.css";

type HeroData = {
  headline: string;
  headlineBlue: string;
  subtext: string;
  btnPrimary: string;
  btnSecondary: string;
  pill: string;
  trust: string[];
  stats: { num: string; label: string }[];
};

const fallback: HeroData = {
  headline: "Train Smarter.",
  headlineBlue: "Stay Compliant.",
  subtext: "Expert-built compliance courses in AML, GDPR, Responsible Gambling and KYC. Train your team, track progress, and issue certificates — all in one place.",
  btnPrimary: "Start Training Today",
  btnSecondary: "Explore Courses",
  pill: "AI-Powered Compliance Training",
  trust: ["Regulator-aligned content", "PDF certificates issued instantly", "Built for gaming, finance & fintech"],
  stats: [
    { num: "4", label: "Expert Courses" },
    { num: "500+", label: "Professionals Trained" },
    { num: "30+", label: "Countries Covered" },
    { num: "100%", label: "Regulator Aligned" },
  ],
};

export default function Hero({ data }: { data?: HeroData }) {
  const d = data || fallback;

  return (
    <section className={s.hero}>
      <div className={`${s.heroBlob} ${s.heroBlob1}`} />
      <div className={`${s.heroBlob} ${s.heroBlob2}`} />
      <div className={s.heroInner}>
        <div className={s.heroPill}>
          <div className={s.heroPillDot}>
            <svg viewBox="0 0 10 10" fill="none" stroke="#2563EB" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 5.5l2 2 4-4" />
            </svg>
          </div>
          <span>{d.pill}</span>
        </div>

        <h1 className={s.heroH1}>
          {d.headline}<br />
          <span>{d.headlineBlue}</span>
        </h1>

        <p className={s.heroSub}>{d.subtext}</p>

        <div className={s.heroBtns}>
          <button className={s.btnSolid}>{d.btnPrimary}</button>
          <Link href="#courses"><button className={s.btnOutline}>{d.btnSecondary}</button></Link>
        </div>

        <div className={s.heroTrust}>
          {d.trust.map((t) => (
            <div key={t} className={s.trustItem}>
              <div className={s.trustCheck}>
                <svg viewBox="0 0 10 10" fill="none" stroke="#2563EB" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 5.5l2 2 4-4" />
                </svg>
              </div>
              {t}
            </div>
          ))}
        </div>

        <div className={s.heroStats}>
          {d.stats.map((stat, i) => (
            <>
              {i > 0 && <div key={`div-${i}`} className={s.heroStatDivider} />}
              <div key={stat.label} className={s.heroStat}>
                <span className={s.heroStatNum}>{stat.num}</span>
                <span className={s.heroStatLabel}>{stat.label}</span>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
