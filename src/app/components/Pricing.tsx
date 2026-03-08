import s from "./styles.module.css";

const CheckIcon = () => (
  <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 5.5l2 2 4-4" />
  </svg>
);

const plans = [
  {
    name: "Individual", desc: "Perfect for professionals who need a single certification.",
    price: "€39", per: "/course", featured: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    features: ["Access to one course", "Lessons & quiz included", "PDF certificate on completion", "Lifetime course access"],
    cta: "Buy a Course",
  },
  {
    name: "Starter", desc: "For small teams who need to stay compliant together.",
    price: "€149", per: "/month", featured: true, badge: "Most Popular",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    features: ["Up to 10 employees", "All platform courses included", "Company workspace & branding", "Admin dashboard & reporting", "Certificates for all employees", "CSV & PDF report exports"],
    cta: "Start Free Trial",
  },
  {
    name: "Team", desc: "For growing compliance teams with broader training needs.",
    price: "€349", per: "/month", featured: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    features: ["Up to 50 employees", "Everything in Starter", "Priority support", "Custom course uploads", "Advanced analytics", "Manager role access"],
    cta: "Start Free Trial",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className={s.sectionAlt}>
      <div className={s.sectionWrap}>
        <div className={s.sectionHeadCenter}>
          <div className={s.eyebrowCenter}>
            <div className={s.eyebrowLine} />
            <span className={s.eyebrowText}>Pricing</span>
            <div className={s.eyebrowLine} />
          </div>
          <h2 className={s.sectionTitle}>Simple, transparent pricing</h2>
          <p className={s.sectionSubCenter}>No hidden fees. Cancel anytime. Enterprise pricing available on request.</p>
        </div>
        <div className={s.pricingGrid}>
          {plans.map((plan) => (
            <div key={plan.name} className={`${s.plan} ${plan.featured ? s.planFeatured : s.planBase}`}>
              {plan.badge && <div className={s.planBadge}>{plan.badge}</div>}
              <div className={s.planIconRing}>{plan.icon}</div>
              <div className={s.planName}>{plan.name}</div>
              <div className={s.planDesc}>{plan.desc}</div>
              <div className={s.planDivider} />
              <div className={s.planPrice}>
                <span className={s.planAmount}>{plan.price}</span>
                <span className={s.planPer}>{plan.per}</span>
              </div>
              <ul className={s.planFeatures}>
                {plan.features.map((f) => (
                  <li key={f}>
                    <div className={s.featCheck}><CheckIcon /></div>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={s.planBtn}>{plan.cta}</button>
            </div>
          ))}
        </div>
        <p className={s.pricingNote}>
          Need more than 50 employees?{" "}
          <a href="mailto:hello@lexyacademy.com">Contact us for Enterprise pricing</a>
        </p>
      </div>
    </section>
  );
}
