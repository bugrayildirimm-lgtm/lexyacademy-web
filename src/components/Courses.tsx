const courses = [
  {
    tag: "AML",
    title: "AML Fundamentals",
    description: "Understand anti-money laundering regulations, red flags, reporting obligations, and your role in preventing financial crime.",
    duration: "3 hours",
    lessons: 8,
    icon: "💼",
    color: "from-blue-500/10 to-transparent",
  },
  {
    tag: "GDPR",
    title: "GDPR Compliance",
    description: "Master data protection principles, lawful processing, data subject rights, and breach response obligations under GDPR.",
    duration: "4 hours",
    lessons: 10,
    icon: "🔒",
    color: "from-emerald-500/10 to-transparent",
  },
  {
    tag: "RG",
    title: "Responsible Gambling",
    description: "Learn how to identify problem gambling behaviours, apply player protection tools, and meet regulatory obligations in gaming environments.",
    duration: "2.5 hours",
    lessons: 7,
    icon: "🛡️",
    color: "from-purple-500/10 to-transparent",
  },
  {
    tag: "KYC",
    title: "KYC Fundamentals",
    description: "Understand customer due diligence, identity verification, enhanced due diligence for high-risk customers, and ongoing monitoring requirements.",
    duration: "3 hours",
    lessons: 8,
    icon: "👤",
    color: "from-orange-500/10 to-transparent",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-28 px-6 bg-[#0d1220]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#C9A84C]"></div>
              <span className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium">Courses</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Expert-built compliance<br className="hidden md:block" /> training
            </h2>
          </div>
          <p className="text-[#8B9AB0] max-w-xs text-sm leading-relaxed">
            Every course is written by compliance professionals and aligned to current regulatory standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className={`group relative bg-gradient-to-br ${course.color} bg-[#111827] border border-white/5 rounded-2xl p-7 hover:border-[#C9A84C]/20 transition-all duration-300`}
            >
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-5">
                <span className="text-[#C9A84C] text-xs font-semibold tracking-wider">{course.tag}</span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-white mb-3">{course.title}</h3>
                  <p className="text-[#8B9AB0] text-sm leading-relaxed mb-5">{course.description}</p>
                  <div className="flex items-center gap-4 text-xs text-[#8B9AB0]">
                    <span>⏱ {course.duration}</span>
                    <span>📄 {course.lessons} lessons</span>
                    <span className="text-[#C9A84C]/70">Foundation</span>
                  </div>
                </div>
                <div className="text-3xl shrink-0">{course.icon}</div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                <span className="text-white font-semibold text-lg">€39</span>
                <button className="bg-[#C9A84C] text-[#0A0F1E] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#E8C96A] transition-all">
                  Get Access
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
