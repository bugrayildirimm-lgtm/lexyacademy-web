"use client";
import { useState, useEffect } from "react";

const ADMIN_PASSWORD = "lexy2025";

type SiteContent = {
  id: string;
  section: string;
  data: Record<string, unknown>;
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [content, setContent] = useState<SiteContent[]>([]);
  const [activeSection, setActiveSection] = useState("hero");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [localData, setLocalData] = useState<Record<string, Record<string, unknown>>>({});

  const handleLogin = () => {
    if (pw === ADMIN_PASSWORD) { setAuthed(true); setPwError(false); }
    else setPwError(true);
  };

  useEffect(() => {
    if (!authed) return;
    fetch("/api/content")
      .then(r => r.json())
      .then((rows: SiteContent[]) => {
        setContent(rows);
        const map: Record<string, Record<string, unknown>> = {};
        rows.forEach(r => { map[r.id] = r.data; });
        setLocalData(map);
        setLoading(false);
      });
  }, [authed]);

  const update = (section: string, path: string[], value: unknown) => {
    setLocalData(prev => {
      const next = structuredClone(prev);
      let cur: Record<string, unknown> = next[section];
      for (let i = 0; i < path.length - 1; i++) {
        cur = cur[path[i]] as Record<string, unknown>;
      }
      cur[path[path.length - 1]] = value;
      return next;
    });
  };

  const save = async (sectionId: string) => {
    setSaving(true);
    await fetch("/api/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: sectionId, data: localData[sectionId] }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  if (!authed) {
    return (
      <div style={styles.loginWrap}>
        <div style={styles.loginCard}>
          <div style={styles.loginLogo}>
            <div style={styles.loginLogoMark}>L</div>
            <span style={styles.loginLogoName}>Lexy<span style={{ color: "#2563EB" }}>Academy</span></span>
          </div>
          <h1 style={styles.loginTitle}>Admin Panel</h1>
          <p style={styles.loginSub}>Enter your password to continue</p>
          <input
            style={{ ...styles.input, ...(pwError ? styles.inputError : {}) }}
            type="password"
            placeholder="Password"
            value={pw}
            onChange={e => { setPw(e.target.value); setPwError(false); }}
            onKeyDown={e => e.key === "Enter" && handleLogin()}
            autoFocus
          />
          {pwError && <p style={styles.errorMsg}>Incorrect password</p>}
          <button style={styles.loginBtn} onClick={handleLogin}>Sign In</button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={styles.loadingWrap}>
        <div style={styles.spinner} />
        <p style={{ color: "#64748B", marginTop: 16, fontSize: 14 }}>Loading content...</p>
      </div>
    );
  }

  const sections = [
    { id: "hero", label: "Hero" },
    { id: "how_it_works", label: "How It Works" },
    { id: "courses", label: "Courses" },
    { id: "pricing", label: "Pricing" },
    { id: "footer", label: "Footer" },
  ];

  const d = localData[activeSection] || {};

  return (
    <div style={styles.shell}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarLogo}>
          <div style={styles.loginLogoMark}>L</div>
          <span style={styles.loginLogoName}>Admin</span>
        </div>
        <nav style={styles.nav}>
          {sections.map(s => (
            <button
              key={s.id}
              style={{ ...styles.navItem, ...(activeSection === s.id ? styles.navItemActive : {}) }}
              onClick={() => setActiveSection(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>
        <a href="/" target="_blank" style={styles.viewSite}>↗ View Live Site</a>
      </aside>

      {/* Main */}
      <main style={styles.main}>
        <div style={styles.mainHeader}>
          <div>
            <h2 style={styles.mainTitle}>{sections.find(s => s.id === activeSection)?.label}</h2>
            <p style={styles.mainSub}>Edit content below and click Save to publish changes.</p>
          </div>
          <button
            style={{ ...styles.saveBtn, ...(saving ? styles.saveBtnLoading : {}), ...(saved ? styles.saveBtnSaved : {}) }}
            onClick={() => save(activeSection)}
            disabled={saving}
          >
            {saving ? "Saving..." : saved ? "✓ Saved!" : "Save Changes"}
          </button>
        </div>

        <div style={styles.fields}>
          {/* HERO */}
          {activeSection === "hero" && (
            <>
              <Field label="Headline (white text)" value={d.headline as string} onChange={v => update("hero", ["headline"], v)} />
              <Field label="Headline (blue text)" value={d.headlineBlue as string} onChange={v => update("hero", ["headlineBlue"], v)} />
              <Field label="Subtext" value={d.subtext as string} onChange={v => update("hero", ["subtext"], v)} multiline />
              <Field label="Primary Button" value={d.btnPrimary as string} onChange={v => update("hero", ["btnPrimary"], v)} />
              <Field label="Secondary Button" value={d.btnSecondary as string} onChange={v => update("hero", ["btnSecondary"], v)} />
              <Field label="Pill Text" value={d.pill as string} onChange={v => update("hero", ["pill"], v)} />
              <SectionDivider label="Trust Items" />
              {(d.trust as string[])?.map((t, i) => (
                <Field key={i} label={`Trust Item ${i + 1}`} value={t} onChange={v => {
                  const arr = [...(d.trust as string[])]; arr[i] = v; update("hero", ["trust"], arr);
                }} />
              ))}
              <SectionDivider label="Stats" />
              {(d.stats as { num: string; label: string }[])?.map((stat, i) => (
                <div key={i} style={styles.row}>
                  <Field label={`Stat ${i + 1} Number`} value={stat.num} onChange={v => {
                    const arr = [...(d.stats as { num: string; label: string }[])];
                    arr[i] = { ...arr[i], num: v }; update("hero", ["stats"], arr);
                  }} half />
                  <Field label={`Stat ${i + 1} Label`} value={stat.label} onChange={v => {
                    const arr = [...(d.stats as { num: string; label: string }[])];
                    arr[i] = { ...arr[i], label: v }; update("hero", ["stats"], arr);
                  }} half />
                </div>
              ))}
            </>
          )}

          {/* HOW IT WORKS */}
          {activeSection === "how_it_works" && (
            <>
              <Field label="Title Line 1" value={d.title as string} onChange={v => update("how_it_works", ["title"], v)} />
              <Field label="Title Line 2" value={d.titleLine2 as string} onChange={v => update("how_it_works", ["titleLine2"], v)} />
              <SectionDivider label="Steps" />
              {(d.steps as { num: string; title: string; desc: string }[])?.map((step, i) => (
                <div key={i} style={styles.card}>
                  <p style={styles.cardLabel}>{step.num}</p>
                  <Field label="Title" value={step.title} onChange={v => {
                    const arr = structuredClone(d.steps as { num: string; title: string; desc: string }[]);
                    arr[i].title = v; update("how_it_works", ["steps"], arr);
                  }} />
                  <Field label="Description" value={step.desc} onChange={v => {
                    const arr = structuredClone(d.steps as { num: string; title: string; desc: string }[]);
                    arr[i].desc = v; update("how_it_works", ["steps"], arr);
                  }} multiline />
                </div>
              ))}
            </>
          )}

          {/* COURSES */}
          {activeSection === "courses" && (
            <>
              <Field label="Section Title" value={d.title as string} onChange={v => update("courses", ["title"], v)} />
              <Field label="Section Subtitle" value={d.subtitle as string} onChange={v => update("courses", ["subtitle"], v)} multiline />
              <SectionDivider label="Courses" />
              {(d.courses as { tag: string; title: string; desc: string; duration: string; lessons: string; price: string }[])?.map((course, i) => (
                <div key={i} style={styles.card}>
                  <p style={styles.cardLabel}>{course.tag} — {course.title}</p>
                  <Field label="Title" value={course.title} onChange={v => {
                    const arr = structuredClone(d.courses as { tag: string; title: string; desc: string; duration: string; lessons: string; price: string }[]);
                    arr[i].title = v; update("courses", ["courses"], arr);
                  }} />
                  <Field label="Description" value={course.desc} onChange={v => {
                    const arr = structuredClone(d.courses as { tag: string; title: string; desc: string; duration: string; lessons: string; price: string }[]);
                    arr[i].desc = v; update("courses", ["courses"], arr);
                  }} multiline />
                  <div style={styles.row}>
                    <Field label="Duration" value={course.duration} onChange={v => {
                      const arr = structuredClone(d.courses as { tag: string; title: string; desc: string; duration: string; lessons: string; price: string }[]);
                      arr[i].duration = v; update("courses", ["courses"], arr);
                    }} half />
                    <Field label="Lessons" value={course.lessons} onChange={v => {
                      const arr = structuredClone(d.courses as { tag: string; title: string; desc: string; duration: string; lessons: string; price: string }[]);
                      arr[i].lessons = v; update("courses", ["courses"], arr);
                    }} half />
                    <Field label="Price" value={course.price} onChange={v => {
                      const arr = structuredClone(d.courses as { tag: string; title: string; desc: string; duration: string; lessons: string; price: string }[]);
                      arr[i].price = v; update("courses", ["courses"], arr);
                    }} half />
                  </div>
                </div>
              ))}
            </>
          )}

          {/* PRICING */}
          {activeSection === "pricing" && (
            <>
              <Field label="Section Title" value={d.title as string} onChange={v => update("pricing", ["title"], v)} />
              <Field label="Section Subtitle" value={d.subtitle as string} onChange={v => update("pricing", ["subtitle"], v)} multiline />
              <SectionDivider label="Plans" />
              {(d.plans as { name: string; desc: string; price: string; per: string; cta: string; badge?: string; features: string[] }[])?.map((plan, i) => (
                <div key={i} style={styles.card}>
                  <p style={styles.cardLabel}>{plan.name}</p>
                  <div style={styles.row}>
                    <Field label="Plan Name" value={plan.name} onChange={v => {
                      const arr = structuredClone(d.plans as { name: string; desc: string; price: string; per: string; cta: string; badge?: string; features: string[] }[]);
                      arr[i].name = v; update("pricing", ["plans"], arr);
                    }} half />
                    <Field label="Price" value={plan.price} onChange={v => {
                      const arr = structuredClone(d.plans as { name: string; desc: string; price: string; per: string; cta: string; badge?: string; features: string[] }[]);
                      arr[i].price = v; update("pricing", ["plans"], arr);
                    }} half />
                    <Field label="Per (e.g. /month)" value={plan.per} onChange={v => {
                      const arr = structuredClone(d.plans as { name: string; desc: string; price: string; per: string; cta: string; badge?: string; features: string[] }[]);
                      arr[i].per = v; update("pricing", ["plans"], arr);
                    }} half />
                  </div>
                  <Field label="Description" value={plan.desc} onChange={v => {
                    const arr = structuredClone(d.plans as { name: string; desc: string; price: string; per: string; cta: string; badge?: string; features: string[] }[]);
                    arr[i].desc = v; update("pricing", ["plans"], arr);
                  }} multiline />
                  <Field label="Button Label" value={plan.cta} onChange={v => {
                    const arr = structuredClone(d.plans as { name: string; desc: string; price: string; per: string; cta: string; badge?: string; features: string[] }[]);
                    arr[i].cta = v; update("pricing", ["plans"], arr);
                  }} />
                  {plan.badge !== undefined && (
                    <Field label="Badge Text" value={plan.badge || ""} onChange={v => {
                      const arr = structuredClone(d.plans as { name: string; desc: string; price: string; per: string; cta: string; badge?: string; features: string[] }[]);
                      arr[i].badge = v; update("pricing", ["plans"], arr);
                    }} />
                  )}
                  <p style={{ ...styles.cardLabel, marginTop: 12 }}>Features</p>
                  {plan.features.map((f, fi) => (
                    <Field key={fi} label={`Feature ${fi + 1}`} value={f} onChange={v => {
                      const arr = structuredClone(d.plans as { name: string; desc: string; price: string; per: string; cta: string; badge?: string; features: string[] }[]);
                      arr[i].features[fi] = v; update("pricing", ["plans"], arr);
                    }} />
                  ))}
                </div>
              ))}
            </>
          )}

          {/* FOOTER */}
          {activeSection === "footer" && (
            <>
              <Field label="Description" value={d.description as string} onChange={v => update("footer", ["description"], v)} multiline />
              <Field label="Copyright" value={d.copyright as string} onChange={v => update("footer", ["copyright"], v)} />
              <Field label="Tagline" value={d.tagline as string} onChange={v => update("footer", ["tagline"], v)} />
              <SectionDivider label="Platform Links" />
              {(d.platformLinks as string[])?.map((l, i) => (
                <Field key={i} label={`Link ${i + 1}`} value={l} onChange={v => {
                  const arr = [...(d.platformLinks as string[])]; arr[i] = v; update("footer", ["platformLinks"], arr);
                }} />
              ))}
              <SectionDivider label="Company Links" />
              {(d.companyLinks as string[])?.map((l, i) => (
                <Field key={i} label={`Link ${i + 1}`} value={l} onChange={v => {
                  const arr = [...(d.companyLinks as string[])]; arr[i] = v; update("footer", ["companyLinks"], arr);
                }} />
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

function Field({ label, value, onChange, multiline = false, half = false }: {
  label: string; value: string; onChange: (v: string) => void; multiline?: boolean; half?: boolean;
}) {
  return (
    <div style={{ ...styles.fieldWrap, ...(half ? styles.fieldHalf : {}) }}>
      <label style={styles.label}>{label}</label>
      {multiline
        ? <textarea style={styles.textarea} value={value} onChange={e => onChange(e.target.value)} rows={3} />
        : <input style={styles.input} value={value} onChange={e => onChange(e.target.value)} />
      }
    </div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div style={styles.divider}>
      <span style={styles.dividerLabel}>{label}</span>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  loginWrap: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F8FAFC" },
  loginCard: { background: "white", border: "1px solid #E2E8F0", borderRadius: 20, padding: "48px 40px", width: 380, display: "flex", flexDirection: "column", gap: 12, boxShadow: "0 4px 32px rgba(0,0,0,0.06)" },
  loginLogo: { display: "flex", alignItems: "center", gap: 10, marginBottom: 8 },
  loginLogoMark: { width: 32, height: 32, borderRadius: 8, background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 14 },
  loginLogoName: { fontSize: 16, fontWeight: 700, color: "#0F172A" },
  loginTitle: { fontSize: 22, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em" },
  loginSub: { fontSize: 13, color: "#64748B", marginBottom: 8 },
  loginBtn: { background: "#2563EB", color: "white", border: "none", borderRadius: 10, padding: "12px 0", fontWeight: 600, fontSize: 14, cursor: "pointer", fontFamily: "inherit", marginTop: 4 },
  input: { width: "100%", padding: "10px 14px", border: "1.5px solid #E2E8F0", borderRadius: 8, fontSize: 14, fontFamily: "inherit", outline: "none", color: "#0F172A", background: "white", boxSizing: "border-box" },
  inputError: { borderColor: "#EF4444" },
  errorMsg: { fontSize: 12, color: "#EF4444", marginTop: -4 },
  loadingWrap: { minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#F8FAFC" },
  spinner: { width: 32, height: 32, border: "3px solid #E2E8F0", borderTop: "3px solid #2563EB", borderRadius: "50%", animation: "spin 0.8s linear infinite" },
  shell: { display: "flex", minHeight: "100vh", fontFamily: "Inter, sans-serif", background: "#F8FAFC" },
  sidebar: { width: 220, background: "white", borderRight: "1px solid #E2E8F0", display: "flex", flexDirection: "column", padding: "24px 16px", gap: 4, position: "sticky", top: 0, height: "100vh" },
  sidebarLogo: { display: "flex", alignItems: "center", gap: 8, padding: "0 8px", marginBottom: 24 },
  nav: { display: "flex", flexDirection: "column", gap: 2, flex: 1 },
  navItem: { textAlign: "left", padding: "9px 12px", borderRadius: 8, border: "none", background: "none", fontSize: 14, fontWeight: 500, color: "#64748B", cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s" },
  navItemActive: { background: "#EFF6FF", color: "#2563EB", fontWeight: 600 },
  viewSite: { fontSize: 12, color: "#94A3B8", padding: "8px 12px", textDecoration: "none" },
  main: { flex: 1, padding: "40px 48px", maxWidth: 860 },
  mainHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 36 },
  mainTitle: { fontSize: 26, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em" },
  mainSub: { fontSize: 13, color: "#64748B", marginTop: 4 },
  saveBtn: { padding: "10px 24px", borderRadius: 10, border: "none", background: "#2563EB", color: "white", fontWeight: 600, fontSize: 14, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s" },
  saveBtnLoading: { background: "#93C5FD", cursor: "not-allowed" },
  saveBtnSaved: { background: "#16A34A" },
  fields: { display: "flex", flexDirection: "column", gap: 16 },
  fieldWrap: { display: "flex", flexDirection: "column", gap: 6, width: "100%" },
  fieldHalf: { flex: "1 1 160px", minWidth: 140 },
  label: { fontSize: 12, fontWeight: 600, color: "#475569", letterSpacing: "0.04em", textTransform: "uppercase" },
  textarea: { width: "100%", padding: "10px 14px", border: "1.5px solid #E2E8F0", borderRadius: 8, fontSize: 14, fontFamily: "inherit", outline: "none", color: "#0F172A", resize: "vertical", lineHeight: 1.6, boxSizing: "border-box" },
  row: { display: "flex", gap: 12, flexWrap: "wrap" },
  card: { background: "white", border: "1px solid #E2E8F0", borderRadius: 12, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 12 },
  cardLabel: { fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: "0.08em", textTransform: "uppercase" },
  divider: { display: "flex", alignItems: "center", gap: 12, margin: "8px 0 4px" },
  dividerLabel: { fontSize: 11, fontWeight: 700, color: "#94A3B8", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" },
};
