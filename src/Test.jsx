import { useState, useRef, useEffect } from "react";

const C = {
  brand: "#0e2926", brandMid: "#163b37", brandAlt: "#091e1c",
  gold: "#c9a84c", goldL: "#e8c97d",
  white: "#ffffff", off: "#f7f5f0",
  text: "#111827", muted: "#6b7280", border: "#e5e7eb"
};

const STATS = [
  { n: "500+", l: "Alumni Network" },
  { n: "94%", l: "Placement Rate" },
  { n: "₹18L", l: "Avg. Starting CTC" },
  { n: "40+", l: "Industry Partners" },
];

const MODULES = [
  { title: "Real Estate Finance & Investment", icon: "ti-building-bank", desc: "Master DCF valuation, REITs, mortgage structuring, and capital markets specific to property investment and development." },
  { title: "Property Development & Management", icon: "ti-building-estate", desc: "End-to-end project lifecycle: land acquisition, permitting, construction oversight, tenant management, and asset disposal." },
  { title: "Urban Planning & Land Law", icon: "ti-map-2", desc: "Zoning regulations, environmental compliance, RERA framework, FSI rules, and government land acquisition policies." },
  { title: "Real Estate Marketing & Sales", icon: "ti-speakerphone", desc: "Digital marketing, CRM systems, channel partner networks, luxury segment selling, and buyer psychology." },
  { title: "PropTech & Digital Innovation", icon: "ti-cpu", desc: "Blockchain in title deeds, AI-driven pricing, virtual tours, smart building IoT, and data analytics for investors." },
  { title: "Leadership & Entrepreneurship", icon: "ti-briefcase", desc: "Build your venture, lead teams, manage stakeholders, and launch your own real estate business with mentored incubation." },
];

const FACULTY = [
  { name: "Dr. Priya Sharma", role: "Chair – Real Estate Finance", exp: "Ex-HDFC Ltd. with 20+ years in mortgage banking, REIT fund management, and structured debt products.", init: "PS" },
  { name: "Mr. Rahul Mehta", role: "PropTech & Innovation Lead", exp: "Founded 2 PropTech startups; ex-advisor to NASSCOM's real estate vertical and IIM-A visiting faculty.", init: "RM" },
  { name: "Ms. Kavita Nair", role: "Urban Planning & Law", exp: "Ex-CREDAI national council member, practicing RERA advocate, and certified urban planning consultant.", init: "KN" },
];

const TESTIMONIALS = [
  { name: "Arjun Desai", batch: "Batch 2023", text: "The program gave me exactly the right toolkit to launch my commercial leasing firm. The PropTech module alone was worth the entire fee.", role: "Founder, UrbanNest Realty" },
  { name: "Sneha Patel", batch: "Batch 2022", text: "From civil engineer to real estate investment analyst — this MBA completely transformed my career. The faculty network opened doors I didn't know existed.", role: "Investment Analyst, Blackstone India" },
  { name: "Vikram Singh", batch: "Batch 2023", text: "The finance and law modules prepared me for real land deals. I closed my first ₹12 crore transaction just 3 months after graduating.", role: "Senior Associate, JLL India" },
];

const WHY = [
  { icon: "ti-school", title: "Industry-First Curriculum", desc: "Co-designed with 50+ practitioners and updated every semester." },
  { icon: "ti-network", title: "Live Deal Exposure", desc: "Work on real transactions — site visits, due diligence, client pitches." },
  { icon: "ti-certificate", title: "RERA Certification Included", desc: "Graduate with a RERA-recognised certificate valued across India." },
  { icon: "ti-rocket", title: "Startup Incubation", desc: "Launch your venture with mentorship, legal support, and funding access." },
];

const SYS = `You are an admissions advisor for Lotlite School of Real Estate's MBA program in Pune, India. Key facts: 12-month full-time program, ₹4.5 lakh total fee, 60 seats/year, AICTE approved, RERA certified. Eligibility: any graduate with 50%+, no entrance test. Application deadline: July 31, 2026. Placement rate 94%, avg CTC ₹18L. Answer concisely in 2–4 sentences unless asked for more detail. Be warm, professional, and encouraging.`;

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ role: "assistant", content: "Hi! I'm your MBA Real Estate Advisor 👋 Ask me about fees, curriculum, admission, career outcomes, or anything else!" }]);
  const [inp, setInp] = useState("");
  const [aiLoad, setAiLoad] = useState(false);
  const [openMod, setOpenMod] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", exp: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (chatOpen) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, chatOpen]);

  const send = async () => {
    if (!inp.trim() || aiLoad) return;
    const userMsg = { role: "user", content: inp };
    const next = [...msgs, userMsg];
    setMsgs(next);
    setInp("");
    setAiLoad(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYS,
          messages: next.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const d = await res.json();
      const reply = d.content?.[0]?.text || "Sorry, something went wrong. Please try again.";
      setMsgs(p => [...p, { role: "assistant", content: reply }]);
    } catch {
      setMsgs(p => [...p, { role: "assistant", content: "Connection error — please try again in a moment." }]);
    }
    setAiLoad(false);
  };

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const navLinks = ["About", "Curriculum", "Faculty", "Apply"];

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", color: C.text, lineHeight: 1.6 }}>
      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? C.brand : "transparent",
        transition: "background 0.3s",
        padding: "0 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 64,
      }}>
        <div style={{ color: C.white, fontWeight: 700, fontSize: 19, letterSpacing: "-0.3px" }}>
          <span style={{ color: C.gold }}>Lotlite</span> School of Real Estate
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {navLinks.map(s => (
            <button key={s} onClick={() => scrollTo(s.toLowerCase())}
              style={{ background: "none", border: "none", color: C.white, cursor: "pointer", fontSize: 14, opacity: 0.85, padding: 0 }}>
              {s}
            </button>
          ))}
          <button onClick={() => scrollTo("apply")}
            style={{ background: C.gold, border: "none", color: C.brand, fontWeight: 700, padding: "8px 20px", borderRadius: 6, cursor: "pointer", fontSize: 14 }}>
            Apply Now
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{ background: C.brand, minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 64, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "28px 28px" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", width: "100%" }}>
          <div>
            <div style={{ display: "inline-block", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", color: C.gold, fontSize: 11, fontWeight: 700, letterSpacing: 2, padding: "6px 16px", borderRadius: 20, marginBottom: 24 }}>
              APPLICATIONS OPEN · BATCH 2026
            </div>
            <h1 style={{ color: C.white, fontSize: 52, fontWeight: 800, lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-1.5px" }}>
              MBA in<br /><span style={{ color: C.gold }}>Real Estate</span><br />Management
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, maxWidth: 440, margin: "0 0 36px", lineHeight: 1.7 }}>
              India's most practitioner-led MBA — designed to build the next generation of real estate founders, investors, and executives.
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              <button onClick={() => scrollTo("apply")}
                style={{ background: C.gold, border: "none", color: C.brand, fontWeight: 700, padding: "14px 32px", borderRadius: 8, cursor: "pointer", fontSize: 16 }}>
                Apply for 2026
              </button>
              <button onClick={() => scrollTo("curriculum")}
                style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.35)", color: C.white, fontWeight: 600, padding: "14px 28px", borderRadius: 8, cursor: "pointer", fontSize: 16 }}>
                Explore Curriculum
              </button>
            </div>
          </div>
          {/* Highlights card */}
          <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.12)", padding: "36px 32px" }}>
            <p style={{ color: C.gold, fontWeight: 700, fontSize: 11, letterSpacing: 2, margin: "0 0 24px" }}>PROGRAM HIGHLIGHTS</p>
            {[
              { icon: "ti-clock", val: "12 Months", lbl: "Intensive Full-Time Program" },
              { icon: "ti-map-pin", val: "Pune, India", lbl: "On-Campus Experience" },
              { icon: "ti-currency-rupee", val: "₹4.5 Lakhs", lbl: "Total Program Fee" },
              { icon: "ti-users", val: "60 Seats", lbl: "Limited Intake Per Year" },
              { icon: "ti-briefcase", val: "94%", lbl: "Placement Rate" },
              { icon: "ti-award", val: "RERA + AICTE", lbl: "Certified & Approved" },
            ].map(({ icon, val, lbl }) => (
              <div key={lbl} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(201,168,76,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className={`ti ${icon}`} style={{ color: C.gold, fontSize: 20 }} />
                </div>
                <div>
                  <div style={{ color: C.white, fontWeight: 700, fontSize: 17, lineHeight: 1.2 }}>{val}</div>
                  <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>{lbl}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: C.gold, padding: "26px 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {STATS.map(({ n, l }, i) => (
            <div key={l} style={{ textAlign: "center", borderRight: i < 3 ? "1px solid rgba(14,41,38,0.25)" : "none" }}>
              <div style={{ fontSize: 34, fontWeight: 800, color: C.brand, lineHeight: 1.1 }}>{n}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#163b37", letterSpacing: 0.5 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: C.off, padding: "80px 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <p style={{ color: C.gold, fontWeight: 700, fontSize: 11, letterSpacing: 2, margin: "0 0 12px" }}>ABOUT THE PROGRAM</p>
            <h2 style={{ fontSize: 38, fontWeight: 800, color: C.brand, margin: "0 0 20px", letterSpacing: "-1px" }}>Built for the Real World of Real Estate</h2>
            <p style={{ color: C.muted, fontSize: 16, marginBottom: 16, lineHeight: 1.8 }}>
              Lotlite's MBA is not a classroom program — it's a practitioner's journey. You'll work on live deals, learn from active investors, and graduate with the skills, network, and confidence to lead.
            </p>
            <p style={{ color: C.muted, fontSize: 16, marginBottom: 32, lineHeight: 1.8 }}>
              Designed with CREDAI, JLL, and leading developers, our curriculum blends finance, law, technology, and leadership into one industry-ready program.
            </p>
            <div style={{ display: "flex", gap: 36 }}>
              {[
                { icon: "ti-building", v: "AICTE", l: "Approved" },
                { icon: "ti-award", v: "RERA", l: "Certified" },
                { icon: "ti-star", v: "Top 5", l: "RE MBA in India" }
              ].map(({ icon, v, l }) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <i className={`ti ${icon}`} style={{ fontSize: 30, color: C.gold, display: "block", marginBottom: 4 }} />
                  <div style={{ fontWeight: 800, color: C.brand, fontSize: 18 }}>{v}</div>
                  <div style={{ fontSize: 12, color: C.muted }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {WHY.map(({ icon, title, desc }) => (
              <div key={title} style={{ background: C.white, borderRadius: 12, padding: "24px 20px", border: "1px solid " + C.border }}>
                <i className={`ti ${icon}`} style={{ fontSize: 28, color: C.gold, display: "block", marginBottom: 12 }} />
                <div style={{ fontWeight: 700, fontSize: 14, color: C.brand, marginBottom: 6 }}>{title}</div>
                <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section id="curriculum" style={{ background: C.white, padding: "80px 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: C.gold, fontWeight: 700, fontSize: 11, letterSpacing: 2, margin: "0 0 8px" }}>WHAT YOU'LL LEARN</p>
            <h2 style={{ fontSize: 38, fontWeight: 800, color: C.brand, margin: 0, letterSpacing: "-1px" }}>Program Curriculum</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            {MODULES.map((m, i) => (
              <div key={m.title} onClick={() => setOpenMod(openMod === i ? null : i)}
                style={{ border: "1.5px solid " + (openMod === i ? C.gold : C.border), borderRadius: 12, padding: "20px 24px", cursor: "pointer", background: openMod === i ? "rgba(201,168,76,0.05)" : C.white, transition: "all 0.2s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 8, background: openMod === i ? "rgba(201,168,76,0.18)" : C.off, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className={`ti ${m.icon}`} style={{ fontSize: 22, color: C.gold }} />
                  </div>
                  <div style={{ flex: 1, fontWeight: 600, fontSize: 15, color: C.brand }}>{m.title}</div>
                  <i className={`ti ti-chevron-${openMod === i ? "up" : "down"}`} style={{ color: C.muted, fontSize: 18 }} />
                </div>
                {openMod === i && (
                  <p style={{ color: C.muted, fontSize: 14, margin: "12px 0 0", lineHeight: 1.7, paddingLeft: 54 }}>{m.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACULTY ── */}
      <section id="faculty" style={{ background: C.off, padding: "80px 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: C.gold, fontWeight: 700, fontSize: 11, letterSpacing: 2, margin: "0 0 8px" }}>LEARN FROM THE BEST</p>
            <h2 style={{ fontSize: 38, fontWeight: 800, color: C.brand, margin: 0, letterSpacing: "-1px" }}>Our Faculty</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {FACULTY.map(({ name, role, exp, init }) => (
              <div key={name} style={{ background: C.white, borderRadius: 16, padding: "36px 28px", border: "1px solid " + C.border, textAlign: "center" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: C.brand, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", fontSize: 22, fontWeight: 700, color: C.gold }}>
                  {init}
                </div>
                <div style={{ fontWeight: 800, fontSize: 18, color: C.brand }}>{name}</div>
                <div style={{ fontSize: 13, color: C.gold, fontWeight: 600, margin: "4px 0 14px" }}>{role}</div>
                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7, margin: 0 }}>{exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: C.brand, padding: "80px 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: C.gold, fontWeight: 700, fontSize: 11, letterSpacing: 2, margin: "0 0 8px" }}>SUCCESS STORIES</p>
            <h2 style={{ fontSize: 38, fontWeight: 800, color: C.white, margin: 0, letterSpacing: "-1px" }}>What Our Alumni Say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
            {TESTIMONIALS.map(({ name, batch, text, role }) => (
              <div key={name} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "28px 24px" }}>
                <div style={{ color: C.gold, fontSize: 36, marginBottom: 8, lineHeight: 1, fontFamily: "Georgia, serif" }}>"</div>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, lineHeight: 1.75, margin: "0 0 20px" }}>{text}</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16 }}>
                  <div style={{ fontWeight: 700, color: C.white, fontSize: 15 }}>{name}</div>
                  <div style={{ fontSize: 12, color: C.gold, marginTop: 2 }}>{role}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{batch}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLY ── */}
      <section id="apply" style={{ background: C.off, padding: "80px 2rem" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ color: C.gold, fontWeight: 700, fontSize: 11, letterSpacing: 2, margin: "0 0 8px" }}>JOIN THE 2026 BATCH</p>
            <h2 style={{ fontSize: 38, fontWeight: 800, color: C.brand, margin: "0 0 8px", letterSpacing: "-1px" }}>Apply Now</h2>
            <p style={{ color: C.muted, margin: 0 }}>60 seats · Rolling admissions · Applications close July 31, 2026</p>
          </div>
          {submitted ? (
            <div style={{ background: C.white, borderRadius: 16, padding: "56px 40px", textAlign: "center", border: "1px solid " + C.border }}>
              <i className="ti ti-circle-check" style={{ fontSize: 60, color: "#22c55e", display: "block", marginBottom: 18 }} />
              <h3 style={{ color: C.brand, fontSize: 24, fontWeight: 800, margin: "0 0 10px" }}>Application Received!</h3>
              <p style={{ color: C.muted, margin: 0 }}>Our admissions team will contact <strong>{form.email}</strong> within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
              style={{ background: C.white, borderRadius: 16, padding: "40px", border: "1px solid " + C.border }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                {[{ k: "name", l: "Full Name", t: "text", ph: "Your full name" }, { k: "email", l: "Email Address", t: "email", ph: "you@email.com" }].map(({ k, l, t, ph }) => (
                  <div key={k}>
                    <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: C.brand, marginBottom: 6 }}>{l} *</label>
                    <input type={t} placeholder={ph} required value={form[k]}
                      onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))}
                      style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1.5px solid " + C.border, fontSize: 15, boxSizing: "border-box" }} />
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: C.brand, marginBottom: 6 }}>Phone Number *</label>
                  <input type="tel" placeholder="+91 98765 43210" required value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1.5px solid " + C.border, fontSize: 15, boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: C.brand, marginBottom: 6 }}>Work Experience *</label>
                  <select required value={form.exp} onChange={e => setForm(f => ({ ...f, exp: e.target.value }))}
                    style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1.5px solid " + C.border, fontSize: 15, background: C.white, boxSizing: "border-box" }}>
                    <option value="">Select</option>
                    <option>Fresher (0–1 yrs)</option>
                    <option>1–3 years</option>
                    <option>3–5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: C.brand, marginBottom: 6 }}>Why Real Estate?</label>
                <textarea placeholder="Tell us what excites you about this field..." rows={3} value={form.msg}
                  onChange={e => setForm(f => ({ ...f, msg: e.target.value }))}
                  style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1.5px solid " + C.border, fontSize: 15, resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button type="submit"
                style={{ width: "100%", background: C.brand, color: C.white, border: "none", padding: "16px", borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: "pointer" }}>
                Submit Application →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: C.brandAlt, padding: "56px 2rem 28px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div>
              <div style={{ color: C.white, fontWeight: 800, fontSize: 20, marginBottom: 14 }}>
                <span style={{ color: C.gold }}>Lotlite</span> School of Real Estate
              </div>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, maxWidth: 300, lineHeight: 1.8, margin: "0 0 20px" }}>
                Shaping the future of India's real estate industry — one leader at a time.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                {["ti-brand-linkedin", "ti-brand-instagram", "ti-brand-youtube"].map(ic => (
                  <div key={ic} style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className={`ti ${ic}`} style={{ color: "rgba(255,255,255,0.6)", fontSize: 18 }} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ color: C.gold, fontWeight: 700, fontSize: 11, letterSpacing: 2, marginBottom: 18 }}>PROGRAM</div>
              {navLinks.map(l => (
                <button key={l} onClick={() => scrollTo(l.toLowerCase())}
                  style={{ display: "block", background: "none", border: "none", color: "rgba(255,255,255,0.55)", fontSize: 14, cursor: "pointer", padding: "4px 0", textAlign: "left" }}>{l}</button>
              ))}
            </div>
            <div>
              <div style={{ color: C.gold, fontWeight: 700, fontSize: 11, letterSpacing: 2, marginBottom: 18 }}>CONTACT</div>
              {["admissions@Lotlitere.edu.in", "+91 20 4567 8900", "Hinjewadi Phase 1, Pune 411057"].map(t => (
                <p key={t} style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, margin: "0 0 8px" }}>{t}</p>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, margin: 0 }}>© 2026 Lotlite School of Real Estate. All rights reserved.</p>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, margin: 0 }}>AICTE Approved · RERA Certified Program</p>
          </div>
        </div>
      </footer>

      {/* ── AI CHAT WIDGET ── */}
      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 200 }}>
        {chatOpen && (
          <div style={{ width: 360, height: 490, background: C.white, borderRadius: 16, border: "1px solid " + C.border, boxShadow: "0 12px 40px rgba(0,0,0,0.18)", display: "flex", flexDirection: "column", marginBottom: 12, overflow: "hidden" }}>
            <div style={{ background: C.brand, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="ti ti-building-estate" style={{ color: C.gold, fontSize: 18 }} />
                </div>
                <div>
                  <div style={{ color: C.white, fontWeight: 700, fontSize: 14 }}>AI Program Advisor</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>Powered by Claude · Always available</div>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)}
                style={{ background: "none", border: "none", color: "rgba(255,255,255,0.6)", cursor: "pointer", fontSize: 22, lineHeight: 1, padding: 0 }}>×</button>
            </div>
            <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 10 }}>
              {msgs.map((m, i) => (
                <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                  <div style={{
                    maxWidth: "84%", padding: "10px 14px",
                    borderRadius: m.role === "user" ? "12px 12px 4px 12px" : "12px 12px 12px 4px",
                    background: m.role === "user" ? C.brand : C.off,
                    color: m.role === "user" ? C.white : C.text,
                    fontSize: 14, lineHeight: 1.55
                  }}>{m.content}</div>
                </div>
              ))}
              {aiLoad && (
                <div style={{ display: "flex", gap: 5, padding: "10px 14px", background: C.off, borderRadius: "12px 12px 12px 4px", width: "fit-content" }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: C.gold, animation: `dot 1.2s ${i*0.2}s ease-in-out infinite` }} />
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>
            <div style={{ padding: "12px 14px", borderTop: "1px solid " + C.border, display: "flex", gap: 8 }}>
              <input value={inp} onChange={e => setInp(e.target.value)}
                onKeyDown={e => e.key === "Enter" && send()}
                placeholder="Ask about fees, career, admission..."
                style={{ flex: 1, padding: "10px 14px", borderRadius: 8, border: "1.5px solid " + C.border, fontSize: 14, outline: "none", boxSizing: "border-box" }} />
              <button onClick={send}
                style={{ background: C.brand, border: "none", color: C.white, width: 40, height: 40, borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className="ti ti-send" style={{ fontSize: 18 }} />
              </button>
            </div>
          </div>
        )}
        <button onClick={() => setChatOpen(o => !o)}
          style={{ background: C.gold, border: "none", width: 58, height: 58, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.25)", marginLeft: "auto" }}>
          <i className={`ti ${chatOpen ? "ti-x" : "ti-message-chatbot"}`} style={{ fontSize: 26, color: C.brand }} />
        </button>
      </div>

      <style>{`
        @keyframes dot {
          0%,80%,100% { transform: scale(0.6); opacity:0.4; }
          40% { transform: scale(1); opacity:1; }
        }
        input:focus, textarea:focus, select:focus { border-color: #c9a84c !important; }
        button:hover { opacity: 0.92; }
      `}</style>
    </div>
  );
}
