const steps = [
  {
    number: "01",
    title: "Choose Your Course",
    description: "Browse expert-built compliance courses covering AML, GDPR, Responsible Gambling, and KYC. Each course is aligned to current regulatory requirements.",
    icon: "📚",
  },
  {
    number: "02",
    title: "Learn at Your Pace",
    description: "Work through structured lessons, real-world scenarios, and knowledge checks. Content is concise, practical, and built for busy compliance professionals.",
    icon: "🎯",
  },
  {
    number: "03",
    title: "Pass the Assessment",
    description: "Complete a quiz to validate your understanding. Each question reflects real compliance scenarios you'll encounter in your role.",
    icon: "✅",
  },
  {
    number: "04",
    title: "Get Certified",
    description: "Download your PDF certificate instantly. Share it with your employer or regulator as verified proof of training.",
    icon: "🏆",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 bg-[#0A0F1E]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#C9A84C]"></div>
            <span className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium">How it works</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white max-w-lg leading-tight">
            From enrolment to certificate in four steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative group bg-[#111827] border border-white/5 rounded-2xl p-6 hover:border-[#C9A84C]/20 transition-all duration-300"
            >
              <div className="text-[#C9A84C]/20 font-display text-5xl font-bold mb-4 leading-none">
                {step.number}
              </div>
              <div className="text-2xl mb-4">{step.icon}</div>
              <h3 className="font-display text-lg font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-[#8B9AB0] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
