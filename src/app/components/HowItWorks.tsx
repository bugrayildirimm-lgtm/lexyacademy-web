import s from "./styles.module.css";

type Step = { num: string; title: string; desc: string };
type HowItWorksData = { title: string; titleLine2: string; steps: Step[] };

const icons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" /></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>,
];

const fallback: HowItWorksData = {
  title: "From enrolment to certificate",
  titleLine2: "in four simple steps",
  steps: [
    { num: "STEP 01", title: "Choose Your Course", desc: "Browse expert-built compliance courses covering AML, GDPR, Responsible Gambling, and KYC — each aligned to current regulatory requirements." },
    { num: "STEP 02", title: "Learn at Your Pace", desc: "Work through structured lessons, real-world scenarios, and knowledge checks. Concise content built for busy compliance professionals." },
    { num: "STEP 03", title: "Pass the Assessment", desc: "Complete a quiz to validate your understanding. Each question reflects real compliance scenarios you'll encounter in your professional role." },
    { num: "STEP 04", title: "Get Certified", desc: "Download your PDF certificate instantly. Share it with your employer or regulator as verified proof of completed training." },
  ],
};

export default function HowItWorks({ data }: { data?: HowItWorksData }) {
  const d = data || fallback;

  return (
    <section id="how-it-works" className={s.sectionAlt}>
      <div className={s.sectionWrap}>
        <div className={s.sectionHead}>
          <div className={s.eyebrow}>
            <div className={s.eyebrowLine} />
            <span className={s.eyebrowText}>How it works</span>
          </div>
          <h2 className={s.sectionTitle}>{d.title}<br />{d.titleLine2}</h2>
        </div>
        <div className={s.stepsGrid}>
          {d.steps.map((step, i) => (
            <div key={step.num} className={s.step}>
              <div className={s.stepNum}>{step.num}</div>
              <div className={s.stepIconRing}>{icons[i]}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
