const plans = [
  {
    name: "Individual",
    price: "€39",
    per: "per course",
    description: "Perfect for professionals who need a single certification.",
    features: [
      "Access to one course",
      "Structured lessons & quizzes",
      "PDF certificate on completion",
      "Lifetime access to course",
      "Regulatory-aligned content",
    ],
    cta: "Buy a Course",
    highlight: false,
  },
  {
    name: "Starter",
    price: "€149",
    per: "per month",
    description: "For small teams who need to stay compliant together.",
    features: [
      "Up to 10 employees",
      "All platform courses included",
      "Company workspace & branding",
      "Admin dashboard & reporting",
      "Certificates for all employees",
      "CSV & PDF report exports",
    ],
    cta: "Start Free Trial",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Team",
    price: "€349",
    per: "per month",
    description: "For growing compliance teams with broader training needs.",
    features: [
      "Up to 50 employees",
      "Everything in Starter",
      "Priority support",
      "Custom course uploads",
      "Advanced analytics",
      "Manager role access",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 bg-[#0A0F1E]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#C9A84C]"></div>
            <span className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium">Pricing</span>
            <div className="w-12 h-0.5 bg-[#C9A84C]"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-[#8B9AB0] max-w-md mx-auto text-sm">
            No hidden fees. Cancel anytime. Enterprise pricing available on request.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? "bg-[#C9A84C]"
                  : "bg-[#111827] border border-white/5"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0A0F1E] text-[#C9A84C] text-xs font-semibold tracking-widest uppercase px-4 py-1 rounded-full border border-[#C9A84C]/30">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display text-xl font-bold mb-1 ${plan.highlight ? "text-[#0A0F1E]" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-5 ${plan.highlight ? "text-[#0A0F1E]/70" : "text-[#8B9AB0]"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className={`font-display text-4xl font-bold ${plan.highlight ? "text-[#0A0F1E]" : "text-white"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlight ? "text-[#0A0F1E]/60" : "text-[#8B9AB0]"}`}>
                    {plan.per}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm">
                    <span className={plan.highlight ? "text-[#0A0F1E]" : "text-[#C9A84C]"}>✓</span>
                    <span className={plan.highlight ? "text-[#0A0F1E]/80" : "text-[#8B9AB0]"}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.highlight
                    ? "bg-[#0A0F1E] text-white hover:bg-[#111827]"
                    : "border border-[#C9A84C]/40 text-[#C9A84C] hover:border-[#C9A84C] hover:bg-[#C9A84C]/8"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[#8B9AB0] text-sm">
            Need more than 50 employees?{" "}
            <a href="mailto:hello@lexyacademy.com" className="text-[#C9A84C] hover:underline">
              Contact us for Enterprise pricing
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
