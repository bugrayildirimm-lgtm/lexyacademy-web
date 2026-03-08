import Link from "next/link";
import s from "./styles.module.css";

export default function Hero() {
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
          <span>AI-Powered Compliance Training</span>
        </div>

        <h1 className={s.heroH1}>
          Train Smarter.<br />
          <span>Stay Compliant.</span>
        </h1>

        <p className={s.heroSub}>
          Expert-built compliance courses in AML, GDPR, Responsible Gambling and KYC.
          Train your team, track progress, and issue certificates — all in one place.
        </p>

        <div className={s.heroBtns}>
          <button className={s.btnSolid}>Start Training Today</button>
          <Link href="#courses"><button className={s.btnOutline}>Explore Courses</button></Link>
        </div>

        <div className={s.heroTrust}>
          {["Regulator-aligned content", "PDF certificates issued instantly", "Built for gaming, finance & fintech"].map((t) => (
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
          <div className={s.heroStat}>
            <span className={s.heroStatNum}>4</span>
            <span className={s.heroStatLabel}>Expert Courses</span>
          </div>
          <div className={s.heroStatDivider} />
          <div className={s.heroStat}>
            <span className={s.heroStatNum}>500+</span>
            <span className={s.heroStatLabel}>Professionals Trained</span>
          </div>
          <div className={s.heroStatDivider} />
          <div className={s.heroStat}>
            <span className={s.heroStatNum}>30+</span>
            <span className={s.heroStatLabel}>Countries Covered</span>
          </div>
          <div className={s.heroStatDivider} />
          <div className={s.heroStat}>
            <span className={s.heroStatNum}>100%</span>
            <span className={s.heroStatLabel}>Regulator Aligned</span>
          </div>
        </div>

      </div>
    </section>
  );
}
