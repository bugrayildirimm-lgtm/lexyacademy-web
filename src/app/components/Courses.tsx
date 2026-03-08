import React from "react";
import s from "./styles.module.css";

type Course = { tag: string; title: string; desc: string; duration: string; lessons: string; price: string };
type CoursesData = { title: string; subtitle: string; courses: Course[] };

const courseIcons: Record<string, React.ReactElement> = {
  AML: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>,
  GDPR: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  RG: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
  KYC: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
};

const defaultIcon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>;

const ClockIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const LessonsIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /></svg>;

const fallback: CoursesData = {
  title: "Expert-built compliance training",
  subtitle: "Every course is written by compliance professionals and aligned to current regulatory standards.",
  courses: [
    { tag: "AML", title: "AML Fundamentals", desc: "Understand anti-money laundering regulations, red flags, reporting obligations, and your role in preventing financial crime.", duration: "3 hours", lessons: "8 lessons", price: "€39" },
    { tag: "GDPR", title: "GDPR Compliance", desc: "Master data protection principles, lawful processing, data subject rights, and breach response obligations under the GDPR.", duration: "4 hours", lessons: "10 lessons", price: "€39" },
    { tag: "RG", title: "Responsible Gambling", desc: "Learn to identify problem gambling behaviours, apply player protection tools, and meet regulatory obligations in gaming environments.", duration: "2.5 hours", lessons: "7 lessons", price: "€39" },
    { tag: "KYC", title: "KYC Fundamentals", desc: "Understand customer due diligence, identity verification, enhanced due diligence for high-risk customers, and ongoing monitoring.", duration: "3 hours", lessons: "8 lessons", price: "€39" },
  ],
};

export default function Courses({ data }: { data?: CoursesData }) {
  const d = data || fallback;

  return (
    <section id="courses" className={s.section}>
      <div className={s.sectionWrap}>
        <div className={s.coursesHead}>
          <div>
            <div className={s.eyebrow}>
              <div className={s.eyebrowLine} />
              <span className={s.eyebrowText}>Courses</span>
            </div>
            <h2 className={s.sectionTitle}>{d.title}</h2>
          </div>
          <p className={s.coursesHeadRight}>{d.subtitle}</p>
        </div>
        <div className={s.coursesGrid}>
          {d.courses.map((course) => (
            <div key={course.tag} className={s.course}>
              <div className={s.courseHead}>
                <div className={s.courseIconRing}>{courseIcons[course.tag] || defaultIcon}</div>
                <span className={s.courseTag}>{course.tag}</span>
              </div>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <div className={s.courseMeta}>
                <div className={s.metaItem}><ClockIcon />{course.duration}</div>
                <div className={s.metaItem}><LessonsIcon />{course.lessons}</div>
                <span className={s.metaLevel}>Foundation</span>
              </div>
              <div className={s.courseFooter}>
                <span className={s.coursePrice}>{course.price}</span>
                <button className={s.btnAccess}>Get Access</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
