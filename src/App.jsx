import React, { useMemo, useState } from "react";
import {
  Routes,
  Route,
  NavLink,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Dumbbell,
  Sun,
  Moon,
  ChevronDown,
  Check,
  MessageCircle,
  Instagram,
  MapPin,
  Clock3,
  Phone,
  Trophy,
  Camera,
  Zap,
  Users,
  ShieldCheck,
  MoveUpRight,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  business,
  plans,
  services,
  gallery,
  achievements,
  heroSlides,
  achievementMoments,
} from "./config/business";

const wa = (msg) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}`;
const meta = (title, description) => {
  document.title = title;
  let tag = document.querySelector('meta[name="description"]');
  if (tag) tag.setAttribute("content", description);
};

function Header({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [loc.pathname]);
  const links = [
    ["Home", "/"],
    ["Training", "#training"],
    ["Tools", "#fitness-tools"],
    ["Trainers", "/trainers"],
    ["Achievements", "/achievements"],
    ["Gallery", "/gallery"],
    ["Membership", "/membership"],
  ];
  const handleSectionLink = (event, target) => {
    event.preventDefault();
    setOpen(false);
    if (loc.pathname !== "/") {
      navigate("/");
      window.setTimeout(
        () =>
          document
            .getElementById(target)
            ?.scrollIntoView({ behavior: "smooth" }),
        180,
      );
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="microbar">
        <span>GHAZIABAD · INDIA</span>
        <span>BUILT ON DISCIPLINE / NOT SHORTCUTS</span>
        <span>YOUR NEXT CHAPTER STARTS HERE ↗</span>
      </div>
      <header className="header">
        <Link to="/" className="brand">
          <span className="brand-icon">
            <Dumbbell size={21} />
          </span>
          <span>
            DEMO<span className="brand-accent">GYM</span>
            <small>STRENGTH CLUB · GHAZIABAD</small>
          </span>
        </Link>
        <nav className={open ? "navigation opened" : "navigation"}>
          {links.map(([label, to]) =>
            to.startsWith("#") ? (
              <a
                key={label}
                href={to}
                onClick={(e) => handleSectionLink(e, to.slice(1))}
              >
                {label}
              </a>
            ) : (
              <NavLink key={label} to={to} end={to === "/"}>
                {label}
              </NavLink>
            ),
          )}
        </nav>
        <div className="header-actions">
          <button
            className="square-btn"
            onClick={() => setDark(!dark)}
            aria-label="Toggle colour theme"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            className="header-cta"
            href={wa("Hello Demo Gym! I would like to know about memberships.")}
            target="_blank"
            rel="noreferrer"
          >
            LET'S TALK <ArrowUpRight size={15} />
          </a>
          <button
            className="square-btn mobile-menu"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="brand">
        <span className="brand-icon">
          <Dumbbell size={20} />
        </span>
        <span>
          DEMO<span className="brand-accent">GYM</span>
          <small>STRENGTH CLUB · GHAZIABAD</small>
        </span>
      </Link>
      <span className="copyright">
        © {new Date().getFullYear()} DEMO GYM. ALL RIGHTS RESERVED.
      </span>
      <div className="footer-links">
        <a
          href={wa("Hello Demo Gym!")}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <MessageCircle />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <Instagram />
        </a>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
function FloatingWhatsApp() {
  return (
    <a
      className="whatsapp-float"
      href={wa("Hello Demo Gym! I would like to know more about the gym.")}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={18} />
      <span>LET'S CHAT</span>
    </a>
  );
}
function Eyebrow({ children }) {
  return (
    <span className="eyebrow">
      <i />
      {children}
    </span>
  );
}
function Heading({ kicker, children }) {
  return (
    <div className="heading-block">
      <Eyebrow>{kicker}</Eyebrow>
      <h2>{children}</h2>
    </div>
  );
}
function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
function Home() {
  React.useEffect(
    () =>
      meta(
        "Demo Gym | Premium Strength Club, Ghaziabad",
        "Train with purpose at Demo Gym in Ghaziabad. Explore strength training, coaching and membership enquiries.",
      ),
    [],
  );
  const [heroIndex, setHeroIndex] = useState(0);
  const [faq, setFaq] = useState(0);
  React.useEffect(() => {
    const timer = window.setInterval(
      () => setHeroIndex((i) => (i + 1) % heroSlides.length),
      4000,
    );
    return () => window.clearInterval(timer);
  }, []);
  const [form, setForm] = useState({ name: "", phone: "", goal: "" });
  const [duration, setDuration] = useState("3 Months");
  const selected = useMemo(
    () => plans.find((p) => p.duration === duration) || plans[1],
    [duration],
  );
  const send = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !/^[6-9]\d{9}$/.test(form.phone)) {
      alert("Enter your name and a valid 10-digit Indian mobile number.");
      return;
    }
    window.open(
      wa(
        `Hello Demo Gym! My name is ${form.name}. Mobile: ${form.phone}. Goal: ${form.goal || "Please guide me"}. I would like to plan a visit.`,
      ),
      "_blank",
      "noopener,noreferrer",
    );
  };
  const faqs = [
    [
      "Is Demo Gym suitable for beginners?",
      "Yes. Beginners can start with a comfortable routine and build confidence step by step. Ask the team about an appropriate orientation.",
    ],
    [
      "Can I visit before choosing a membership?",
      "Send an enquiry on WhatsApp to confirm current visit or trial options before you come in.",
    ],
    [
      "Are the prices shown final?",
      "These are sample demo prices for this website preview. Confirm current rates, taxes and inclusions directly with the gym.",
    ],
  ];
  return (
    <main id="top">
      <section className="hero">
        <div
          className="hero-photo"
          style={{ backgroundImage: `url("${heroSlides[heroIndex].src}")` }}
          key={heroIndex}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <Reveal className="hero-copy">
            <Eyebrow>YOUR SPACE. YOUR STRENGTH.</Eyebrow>
            <h1>
              FORGED
              <br />
              BY <em>EFFORT.</em>
            </h1>
            <p>
              Not a quick fix. Not a passing phase. A place to build strength,
              confidence and habits that stay with you.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-lime" to="/membership">
                EXPLORE MEMBERSHIPS <ArrowUpRight size={17} />
              </Link>
              <Link className="underlink" to="/gallery">
                STEP INSIDE <span>↗</span>
              </Link>
            </div>
          </Reveal>
          <div className="hero-index">
            <span>
              {String(heroIndex + 1).padStart(2, "0")} — 0{heroSlides.length} ·{" "}
              {heroSlides[heroIndex].label}
            </span>
            <span>SCROLL TO FIND YOUR EDGE ↓</span>
          </div>
          <div className="hero-dots" aria-label="Hero image selector">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.src}
                className={i === heroIndex ? "active" : ""}
                onClick={() => setHeroIndex(i)}
                aria-label={`Show hero image ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="hero-orbit">
          <span>TRAIN</span>
          <b>WITH</b>
          <span>PURPOSE</span>
          <i>✳</i>
        </div>
        <div className="hero-side-note">
          STRENGTH IS EARNED — EVERY SINGLE DAY
        </div>
      </section>
      <div className="ticker">
        <div>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>
              DISCIPLINE <b>✳</b> STRENGTH <b>✳</b> CONSISTENCY <b>✳</b>{" "}
              PROGRESS <b>✳</b>
            </span>
          ))}
        </div>
      </div>

      <section className="manifesto section-shell" id="about">
        <Reveal className="manifesto-visual">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1300&q=90"
            alt="Premium strength training gym interior"
          />
          <div className="visual-tag">
            THE WORK STARTS HERE <span>01 / GHZ</span>
          </div>
          <div className="visual-outline">
            NO
            <br />
            EXCUSES
          </div>
        </Reveal>
        <Reveal className="manifesto-copy" delay={0.12}>
          <Eyebrow>MORE THAN A WORKOUT</Eyebrow>
          <h2>
            SHOW UP.
            <br />
            <em>RISE STRONGER.</em>
          </h2>
          <p>
            Every goal begins somewhere. Whether you are new to training or
            ready to challenge your limits, build your next chapter with
            purposeful sessions and a routine you can own.
          </p>
          <div className="value-list">
            <div>
              <Zap />
              <span>
                <b>Train with intent</b>
                <small>Purposeful sessions. Measurable progress.</small>
              </span>
            </div>
            <div>
              <Users />
              <span>
                <b>Find your people</b>
                <small>Good energy. Shared ambition.</small>
              </span>
            </div>
            <div>
              <ShieldCheck />
              <span>
                <b>Build lasting habits</b>
                <small>Consistency beats intensity without direction.</small>
              </span>
            </div>
          </div>
          <Link className="underlink" to="/achievements">
            OUR MINDSET <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>

      <section className="training-section section-shell" id="training">
        <div className="section-top">
          <Heading kicker="TRAIN WITH INTENTION">
            FIND YOUR
            <br />
            <em>TRAINING STYLE.</em>
          </Heading>
          <p>
            Different goals. One mindset: keep moving forward. Explore a way of
            training that fits your ambition.
          </p>
        </div>
        <div className="service-grid">
          {services.map((s, i) => (
            <Reveal className="service-card" delay={i * 0.1} key={s.no}>
              <div className="service-image">
                <img src={s.image} alt={s.title} />
                <span>{s.no}</span>
                <div className="image-arrow">
                  <ArrowUpRight />
                </div>
              </div>
              <div className="service-copy">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a
                  href={wa(`Hello Demo Gym! Tell me more about ${s.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  ENQUIRE <MoveUpRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <AdvancedStudio />
      <section className="achievement-preview section-shell">
        <div className="achievement-bg" />
        <div className="achievement-top">
          <Heading kicker="PROGRESS HAS MANY FORMS">
            SMALL WINS.
            <br />
            <em>BIG MOMENTUM.</em>
          </Heading>
          <p>
            Achievements are not only medals or numbers. They are the habits,
            milestones and personal bests you earn along the way.
          </p>
        </div>
        <div className="milestone-grid">
          {achievements.slice(0, 3).map((a, i) => (
            <Reveal className="milestone" delay={i * 0.1} key={a.value}>
              <span>{a.value}</span>
              <div>
                <b>{a.label}</b>
                <p>{a.desc}</p>
              </div>
              <Trophy />
            </Reveal>
          ))}
        </div>
        <Link className="btn btn-outline-light" to="/achievements">
          EXPLORE ACHIEVEMENTS <ArrowUpRight size={16} />
        </Link>
      </section>

      <section className="membership-section section-shell" id="membership">
        <div className="section-top">
          <Heading kicker="MEMBERSHIP OPTIONS">
            INVEST IN
            <br />
            <em>YOURSELF.</em>
          </Heading>
          <p>
            Choose a starting point. Confirm the details with our team and make
            your first move.
          </p>
        </div>
        <div className="plans-grid">
          {plans.map((p, i) => (
            <Reveal
              className={`plan ${p.popular ? "plan-featured" : ""}`}
              delay={i * 0.1}
              key={p.name}
            >
              {p.popular && (
                <span className="plan-ribbon">MEMBER FAVOURITE</span>
              )}
              <span className="plan-duration">{p.duration}</span>
              <h3>{p.name}</h3>
              <p className="plan-desc">{p.desc}</p>
              <div className="plan-price">
                <sup>₹</sup>
                {p.price.toLocaleString("en-IN")}
                <small> / {p.duration.toLowerCase()}</small>
              </div>
              <div className="plan-divider" />
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <Check size={15} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                className={p.popular ? "btn btn-lime" : "btn btn-outline-light"}
                href={wa(
                  `Hello Demo Gym! I am interested in ${p.name} membership (${p.duration}, ₹${p.price}). Please confirm current price and details.`,
                )}
                target="_blank"
                rel="noreferrer"
              >
                ASK ABOUT THIS PLAN <ArrowUpRight size={16} />
              </a>
            </Reveal>
          ))}
        </div>
        <p className="disclaimer">
          * Demo pricing for presentation only. Confirm current prices, taxes
          and inclusions directly with the gym.
        </p>
      </section>

      <section className="gallery-preview section-shell">
        <div className="section-top">
          <Heading kicker="A LOOK INSIDE">
            THE ENERGY
            <br />
            <em>IS DIFFERENT HERE.</em>
          </Heading>
          <Link className="underlink" to="/gallery">
            VIEW FULL GALLERY <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="preview-gallery">
          <div className="preview-main">
            <img src={gallery[0].src} alt="Gym interior preview" />
            <span>01 / THE SPACE</span>
          </div>
          <div>
            <img src={gallery[1].src} alt="Strength training preview" />
            <span>02 / THE WORK</span>
          </div>
          <div>
            <img src={gallery[2].src} alt="Gym equipment preview" />
            <span>03 / THE DETAILS</span>
          </div>
        </div>
      </section>

      <section className="faq-section section-shell">
        <div>
          <Heading kicker="GOOD TO KNOW">
            A FEW QUICK
            <br />
            <em>ANSWERS.</em>
          </Heading>
          <p>Still have questions? Talk to the team directly.</p>
          <a
            className="underlink"
            href={wa("Hello Demo Gym! I have a question about membership.")}
            target="_blank"
            rel="noreferrer"
          >
            ASK US ON WHATSAPP <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <div className={faq === i ? "faq-item active" : "faq-item"} key={q}>
              <button onClick={() => setFaq(faq === i ? -1 : i)}>
                <span>0{i + 1}</span>
                {q}
                <ChevronDown />
              </button>
              {faq === i && <p>{a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-copy">
          <Eyebrow>YOUR NEXT CHAPTER STARTS NOW</Eyebrow>
          <h2>
            LET'S GET
            <br />
            <em>TO WORK.</em>
          </h2>
          <p>
            Tell us what you are working towards. We’ll connect on WhatsApp and
            help you plan your first visit.
          </p>
          <div className="contact-facts">
            <div>
              <MapPin />
              <span>
                <b>GHAZIABAD, UTTAR PRADESH</b>
                <small>Demo location — exact gym address to be confirmed</small>
              </span>
            </div>
            <div>
              <Clock3 />
              <span>
                <b>OPENING HOURS</b>
                <small>{business.hours}</small>
              </span>
            </div>
            <div>
              <Phone />
              <span>
                <b>{business.phoneDisplay}</b>
                <small>Call or WhatsApp for enquiries</small>
              </span>
            </div>
          </div>
        </div>
        <form className="enquiry-form" onSubmit={send}>
          <Eyebrow>MAKE YOUR FIRST MOVE</Eyebrow>
          <h3>Plan a visit.</h3>
          <label>
            Your name
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name"
              required
            />
          </label>
          <label>
            Mobile number
            <input
              inputMode="numeric"
              maxLength="10"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })
              }
              placeholder="10-digit mobile number"
              required
            />
          </label>
          <label>
            Fitness goal
            <select
              value={form.goal}
              onChange={(e) => setForm({ ...form, goal: e.target.value })}
            >
              <option value="">Choose your goal</option>
              <option>Build muscle</option>
              <option>Weight management</option>
              <option>Improve fitness</option>
              <option>Personal coaching</option>
              <option>Explore membership</option>
            </select>
          </label>
          <button className="btn btn-lime form-btn" type="submit">
            SEND WHATSAPP ENQUIRY <ArrowUpRight size={16} />
          </button>
          <small>
            Your details are not stored on this demo website. Submitting opens
            WhatsApp.
          </small>
        </form>
      </section>
      <section className="map-strip">
        <div>
          <MapPin />
          <span>
            <b>FIND YOUR WAY TO GHaziabad</b>
            <small>
              Open Google Maps to explore nearby gyms and directions.
            </small>
          </span>
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapQuery)}`}
          target="_blank"
          rel="noreferrer"
        >
          OPEN MAPS <ArrowUpRight size={16} />
        </a>
      </section>
      <GymSchema />
    </main>
  );
}

function AdvancedStudio() {
  const [height, setHeight] = useState("175"),
    [weight, setWeight] = useState("75"),
    [bmi, setBmi] = useState(null);
  const [goal, setGoal] = useState("Muscle gain"),
    [level, setLevel] = useState("Beginner"),
    [days, setDays] = useState("4"),
    [workout, setWorkout] = useState(false);
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    date: "",
    time: "Morning",
  });
  const [exercise, setExercise] = useState("All");
  const [progress, setProgress] = useState(() => {
    try {
      return (
        JSON.parse(localStorage.getItem("demoGymProgress")) || {
          current: "75",
          target: "70",
          done: 3,
        }
      );
    } catch {
      return { current: "75", target: "70", done: 3 };
    }
  });
  const [adminOpen, setAdminOpen] = useState(false);
  const calc = () => {
    const h = Number(height) / 100,
      w = Number(weight);
    if (h > 0 && w > 0) setBmi((w / (h * h)).toFixed(1));
  };
  const saveProgress = (key, value) =>
    setProgress((p) => {
      const next = { ...p, [key]: value };
      localStorage.setItem("demoGymProgress", JSON.stringify(next));
      return next;
    });
  const workouts = {
    "Muscle gain": [
      "Push: chest, shoulders & triceps",
      "Pull: back & biceps",
      "Legs: quads, hamstrings & calves",
      "Upper body + core",
      "Rest / active recovery",
      "Full body technique",
      "Rest",
    ],
    "Weight loss": [
      "Full body circuit",
      "Cardio + core",
      "Strength: upper body",
      "Intervals / brisk walk",
      "Strength: lower body",
      "Mobility + conditioning",
      "Rest",
    ],
    Strength: [
      "Squat technique + lower body",
      "Bench press + upper body",
      "Mobility / recovery",
      "Deadlift technique + posterior chain",
      "Overhead press + accessories",
      "Full body strength",
      "Rest",
    ],
    "General fitness": [
      "Full body basics",
      "Cardio + mobility",
      "Upper body basics",
      "Rest / walk",
      "Lower body basics",
      "Core + conditioning",
      "Rest",
    ],
  };
  const exercises = [
    ["All", "All movements"],
    ["Chest", "Push-up"],
    ["Back", "Lat pulldown"],
    ["Legs", "Goblet squat"],
    ["Shoulders", "Dumbbell shoulder press"],
    ["Core", "Plank"],
  ];
  const trainerList = [
    [
      "COACH 01",
      "Strength & conditioning",
      "Build technique, confidence and a progressive routine.",
    ],
    [
      "COACH 02",
      "Personal training",
      "One-to-one guidance shaped around individual goals.",
    ],
    [
      "COACH 03",
      "Functional fitness",
      "Movement quality, stamina and everyday strength.",
    ],
  ];
  const submitBooking = (e) => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(booking.phone)) {
      alert("Enter a valid 10-digit Indian mobile number.");
      return;
    }
    window.open(
      wa(
        `Free trial request\nName: ${booking.name}\nPhone: ${booking.phone}\nDate: ${booking.date}\nPreferred slot: ${booking.time}`,
      ),
      "_blank",
      "noopener,noreferrer",
    );
  };
  return (
    <>
      <section className="advanced-section section-shell" id="fitness-tools">
        <div className="section-top">
          <Heading kicker="TOOLS FOR YOUR NEXT REP">
            KNOW YOUR BODY.
            <br />
            <em>PLAN YOUR WORK.</em>
          </Heading>
          <p>
            Useful starting points for your fitness journey. Calculators and
            generated routines are general guidance, not medical advice or a
            substitute for a qualified coach.
          </p>
        </div>
        <div className="tool-grid">
          <div className="tool-card bmi-card">
            <div className="tool-icon">
              <Zap />
            </div>
            <Eyebrow>01 / BODY METRICS</Eyebrow>
            <h3>
              BMI <em>CALCULATOR.</em>
            </h3>
            <div className="input-pair">
              <label>
                Height (cm)
                <input
                  type="number"
                  min="80"
                  max="250"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </label>
              <label>
                Weight (kg)
                <input
                  type="number"
                  min="20"
                  max="300"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </label>
            </div>
            <button className="btn btn-lime" onClick={calc}>
              CALCULATE BMI <ArrowUpRight size={15} />
            </button>
            {bmi && (
              <div className="bmi-result">
                <strong>{bmi}</strong>
                <span>
                  {Number(bmi) < 18.5
                    ? "Below standard adult range"
                    : Number(bmi) < 25
                      ? "Within standard adult range"
                      : Number(bmi) < 30
                        ? "Above standard adult range"
                        : "High BMI range"}
                </span>
                <small>
                  BMI is a rough screening measure and does not diagnose health
                  or account for muscle mass.
                </small>
              </div>
            )}
          </div>
          <div className="tool-card workout-card">
            <div className="tool-icon">
              <Dumbbell />
            </div>
            <Eyebrow>02 / ROUTINE BUILDER</Eyebrow>
            <h3>
              YOUR WEEK.
              <br />
              <em>YOUR WAY.</em>
            </h3>
            <div className="input-pair">
              <label>
                Goal
                <select value={goal} onChange={(e) => setGoal(e.target.value)}>
                  {Object.keys(workouts).map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </label>
              <label>
                Experience
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </label>
            </div>
            <label className="full-label">
              Days per week
              <select value={days} onChange={(e) => setDays(e.target.value)}>
                {[2, 3, 4, 5, 6].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <button className="btn btn-lime" onClick={() => setWorkout(true)}>
              GENERATE MY ROUTINE <ArrowUpRight size={15} />
            </button>
            {workout && (
              <div className="routine-result">
                <b>
                  {goal.toUpperCase()} · {level.toUpperCase()}
                </b>
                {workouts[goal].slice(0, Number(days)).map((x, i) => (
                  <span key={x}>
                    <i>0{i + 1}</i>
                    {x}
                  </span>
                ))}
                <small>
                  Sample template only. Adjust exercise selection, volume and
                  recovery with a qualified trainer.
                </small>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="library-section section-shell" id="workout-library">
        <div className="section-top">
          <Heading kicker="MOVE WITH GOOD FORM">
            THE MOVEMENT
            <br />
            <em>LIBRARY.</em>
          </Heading>
          <p>
            Explore foundational movements. Use appropriate loads, controlled
            technique and qualified supervision, especially when learning a new
            exercise.
          </p>
        </div>
        <div className="filter-tabs exercise-tabs">
          {["All", "Chest", "Back", "Legs", "Shoulders", "Core"].map((x) => (
            <button
              className={exercise === x ? "selected" : ""}
              onClick={() => setExercise(x)}
              key={x}
            >
              {x}
            </button>
          ))}
        </div>
        <div className="exercise-grid">
          {exercises
            .filter((x) => exercise === "All" || x[0] === exercise)
            .map((x, i) => (
              <div className="exercise-card" key={x[0]}>
                <span>
                  0{i + 1} / {x[0].toUpperCase()}
                </span>
                <div className="exercise-symbol">
                  <Dumbbell size={32} />
                </div>
                <h3>{x[1]}</h3>
                <p>
                  Focus on stable posture, a comfortable range of motion and
                  controlled repetitions.
                </p>
                <a
                  href={wa(
                    `Hello Demo Gym! Please guide me on learning ${x[1]} with correct form.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  LEARN WITH A COACH ↗
                </a>
              </div>
            ))}
        </div>
      </section>
      <section className="booking-section section-shell" id="free-trial">
        <div className="booking-copy">
          <Eyebrow>YOUR FIRST SESSION STARTS HERE</Eyebrow>
          <h2>
            TRY THE
            <br />
            <em>ENERGY.</em>
          </h2>
          <p>
            Request a free-trial visit. The gym team will confirm availability,
            date and any trial conditions directly with you.
          </p>
          <div className="booking-perks">
            <span>
              <Check /> No commitment to enquire
            </span>
            <span>
              <Check /> Choose a preferred time
            </span>
            <span>
              <Check /> Confirmation from the team
            </span>
          </div>
        </div>
        <form className="booking-form" onSubmit={submitBooking}>
          <Eyebrow>FREE TRIAL REQUEST</Eyebrow>
          <h3>Book your visit.</h3>
          <label>
            Full name
            <input
              required
              value={booking.name}
              onChange={(e) => setBooking({ ...booking, name: e.target.value })}
              placeholder="Your name"
            />
          </label>
          <label>
            Mobile number
            <input
              required
              inputMode="numeric"
              maxLength="10"
              value={booking.phone}
              onChange={(e) =>
                setBooking({
                  ...booking,
                  phone: e.target.value.replace(/\D/g, ""),
                })
              }
              placeholder="10-digit number"
            />
          </label>
          <div className="input-pair">
            <label>
              Preferred date
              <input
                required
                type="date"
                min={new Date().toISOString().slice(0, 10)}
                value={booking.date}
                onChange={(e) =>
                  setBooking({ ...booking, date: e.target.value })
                }
              />
            </label>
            <label>
              Preferred slot
              <select
                value={booking.time}
                onChange={(e) =>
                  setBooking({ ...booking, time: e.target.value })
                }
              >
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </label>
          </div>
          <button className="btn btn-lime form-btn">
            REQUEST MY TRIAL <ArrowUpRight size={16} />
          </button>
          <small>
            Demo flow: opens WhatsApp with your request. No booking is confirmed
            until the gym replies.
          </small>
        </form>
      </section>
      <section className="member-preview section-shell" id="member-zone">
        <div className="section-top">
          <Heading kicker="YOUR MEMBER SPACE">
            TRACK THE
            <br />
            <em>SMALL WINS.</em>
          </Heading>
          <p>
            A local preview of a member progress panel. Values stay in this
            browser only; real accounts and secure cloud sync need a backend.
          </p>
        </div>
        <div className="member-dashboard">
          <div className="member-stat">
            <span>CURRENT WEIGHT (KG)</span>
            <strong>{progress.current}</strong>
            <input
              aria-label="Current weight"
              type="number"
              value={progress.current}
              onChange={(e) => saveProgress("current", e.target.value)}
            />
          </div>
          <div className="member-stat">
            <span>TARGET WEIGHT (KG)</span>
            <strong>{progress.target}</strong>
            <input
              aria-label="Target weight"
              type="number"
              value={progress.target}
              onChange={(e) => saveProgress("target", e.target.value)}
            />
          </div>
          <div className="member-stat">
            <span>WORKOUTS THIS WEEK</span>
            <strong>{progress.done}/7</strong>
            <input
              aria-label="Workouts this week"
              type="range"
              min="0"
              max="7"
              value={progress.done}
              onChange={(e) => saveProgress("done", Number(e.target.value))}
            />
          </div>
          <div className="progress-track">
            <span
              style={{
                width: `${Math.min(100, (Number(progress.done) / 7) * 100)}%`,
              }}
            />
          </div>
          <small>
            Demo progress tracker · Saved to local browser storage, not a secure
            member account.
          </small>
        </div>
      </section>
      <ReviewsCarousel />
    </>
  );
}

function ReviewsCarousel() {
  const reviews = [
    {
      name: "Aarav S.",
      initials: "AS",
      date: "2 weeks ago",
      text: "Great energy and a motivating atmosphere. The equipment variety makes it easy to plan a focused workout.",
      tag: "TRAINING EXPERIENCE",
    },
    {
      name: "Priya M.",
      initials: "PM",
      date: "1 month ago",
      text: "A welcoming environment to build a consistent routine. The team is approachable and the space feels energetic.",
      tag: "GYM ATMOSPHERE",
    },
    {
      name: "Rohan K.",
      initials: "RK",
      date: "3 weeks ago",
      text: "I like the strength-training setup and the focused vibe. A good place to stay disciplined and keep progressing.",
      tag: "STRENGTH TRAINING",
    },
    {
      name: "Neha R.",
      initials: "NR",
      date: "1 week ago",
      text: "Clean-looking training zones and a positive atmosphere. It feels easier to stay committed to my fitness goals.",
      tag: "MEMBER EXPERIENCE",
    },
  ];
  const [active, setActive] = useState(0);
  React.useEffect(() => {
    const timer = window.setInterval(
      () => setActive((i) => (i + 1) % reviews.length),
      2800,
    );
    return () => window.clearInterval(timer);
  }, []);
  const change = (step) =>
    setActive((i) => (i + step + reviews.length) % reviews.length);
  const review = reviews[active];
  return (
    <section
      className="reviews-section section-shell"
      aria-label="Member review examples"
    >
      <div className="reviews-heading">
        <div>
          <Eyebrow>WORDS THAT KEEP US MOVING</Eyebrow>
          <h2>
            GOOD ENERGY.
            <br />
            <em>REAL MOTIVATION.</em>
          </h2>
          <p>
            A rotating showcase of sample review layouts for the gym. Replace
            these demo quotes with genuine, approved Google reviews before
            publishing.
          </p>
        </div>
        <a
          className="reviews-google-link"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.name + " Ghaziabad")}`}
          target="_blank"
          rel="noreferrer"
        >
          FIND US ON GOOGLE <ArrowUpRight size={15} />
        </a>
      </div>
      <div className="review-stage">
        <AnimatePresence mode="wait">
          <motion.article
            className="review-card"
            key={active}
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -35 }}
            transition={{ duration: 0.38, ease: "easeOut" }}
          >
            <div className="review-topline">
              <span className="google-g">G</span>
              <span className="review-source">GOOGLE-STYLE REVIEW PREVIEW</span>
              <span
                className="review-stars"
                aria-label="5 out of 5 sample stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </span>
            </div>
            <blockquote>“{review.text}”</blockquote>
            <div className="review-person">
              <span className="review-avatar">{review.initials}</span>
              <span>
                <b>{review.name}</b>
                <small>
                  {review.date} · {review.tag}
                </small>
              </span>
              <span className="review-count">
                0{active + 1} / 0{reviews.length}
              </span>
            </div>
          </motion.article>
        </AnimatePresence>
        <div className="review-controls">
          <div className="review-progress">
            {reviews.map((r, i) => (
              <button
                key={r.initials}
                aria-label={`Show sample review ${i + 1}`}
                className={active === i ? "active" : ""}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
          <div className="review-arrows">
            <button onClick={() => change(-1)} aria-label="Previous review">
              <ChevronLeft />
            </button>
            <button onClick={() => change(1)} aria-label="Next review">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
      <p className="review-disclaimer">
        Demo testimonials only — these are not verified Google reviews or
        statements from actual members. Replace with real reviews and permission
        before launch.
      </p>
    </section>
  );
}

function GymSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ExerciseGym",
          name: business.name,
          telephone: business.phoneDisplay,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ghaziabad",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
          areaServed: "Ghaziabad",
        }),
      }}
    />
  );
}
function PageHero({ kicker, title, desc }) {
  return (
    <section className="inner-hero">
      <div className="inner-hero-image" />
      <div className="inner-hero-overlay" />
      <div className="inner-hero-content">
        <Eyebrow>{kicker}</Eyebrow>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </section>
  );
}
function Achievements() {
  React.useEffect(
    () =>
      meta(
        "Achievements | Demo Gym Ghaziabad",
        "Explore the mindset and personal milestones that define progress at Demo Gym in Ghaziabad.",
      ),
    [],
  );
  return (
    <main>
      <PageHero
        kicker="PROGRESS IS PERSONAL"
        title={
          <>
            EARNED.
            <br />
            <em>NOT GIVEN.</em>
          </>
        }
        desc="Every rep, every return, every small promise kept. That's what achievement looks like."
      />
      <section className="achievement-page section-shell">
        <div className="section-top">
          <Heading kicker="THE MILESTONES">
            YOUR JOURNEY.
            <br />
            <em>YOUR VICTORIES.</em>
          </Heading>
          <p>
            We celebrate the process as much as the outcome. Use these
            milestones as inspiration for the goals you set for yourself.
          </p>
        </div>
        <div className="achievement-cards">
          {achievements.map((a, i) => (
            <Reveal className="achievement-card" delay={i * 0.08} key={a.value}>
              <span className="achievement-number">{a.value}</span>
              <div className="trophy-icon">
                <Trophy />
              </div>
              <h3>{a.label}</h3>
              <p>{a.desc}</p>
              <span className="achievement-line" />
            </Reveal>
          ))}
        </div>
        <div className="competition-panel">
          <div className="competition-art">
            <Trophy size={54} />
            <span>
              COMPETITION
              <br />
              SPOTLIGHT
            </span>
          </div>
          <div className="competition-copy">
            <span className="eyebrow">COMPETITION RECORD</span>
            <h2>
              CNI <em>COMPETITION.</em>
            </h2>
            <p>
              Use this feature to showcase the gym's verified CNI competition
              results, including medal winners, categories and event year.
            </p>
            <div className="medal-row">
              <div>
                <b>—</b>
                <small>GOLD</small>
              </div>
              <div>
                <b>—</b>
                <small>SILVER</small>
              </div>
              <div>
                <b>—</b>
                <small>BRONZE</small>
              </div>
              <div>
                <b>—</b>
                <small>TOTAL</small>
              </div>
            </div>
            <small className="verification-note">
              Medal counts are awaiting confirmation from the gym owner. No
              results have been invented.
            </small>
            <a
              className="btn btn-lime"
              href={wa(
                "Hello Demo Gym! Please share verified CNI competition medal results and achievements.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              ASK OWNER FOR RESULTS <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="achievement-moments-head">
          <Eyebrow>THE JOURNEY IN PICTURES</Eyebrow>
          <h2>
            EFFORT HAS
            <br />
            <em>A STORY.</em>
          </h2>
          <p>
            Competition, training and team moments. Replace these illustrative
            images with the gym's own verified event and medal photographs
            before publishing.
          </p>
        </div>
        <div className="achievement-moments">
          {achievementMoments.map((moment, i) => (
            <Reveal
              className="achievement-moment"
              delay={i * 0.09}
              key={moment.title}
            >
              <div className="achievement-moment-image">
                <img src={moment.image} alt={moment.title} />
                <span>{moment.category}</span>
              </div>
              <div className="achievement-moment-copy">
                <div>
                  <h3>{moment.title}</h3>
                  <p>{moment.subtitle}</p>
                </div>
                <span>0{i + 1}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="achievement-note">
          <span className="eyebrow">
            NO FAKE NUMBERS. REAL PERSONAL PROGRESS.
          </span>
          <h2>
            THE BEST COMPETITION
            <br />
            <em>IS WHO YOU WERE YESTERDAY.</em>
          </h2>
          <p>
            Add verified awards, certificates, competition names, medal counts
            and member achievements here after owner approval. The design is
            ready for real evidence and photographs.
          </p>
        </div>
      </section>
    </main>
  );
}
function GalleryPage() {
  React.useEffect(
    () =>
      meta(
        "Gallery | Demo Gym Ghaziabad",
        "Explore the Demo Gym photo gallery — training spaces, equipment and fitness in action.",
      ),
    [],
  );
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const shown = gallery.filter(
    (g) => filter === "All" || g.category === filter,
  );
  return (
    <main>
      <PageHero
        kicker="INSIDE THE STRENGTH CLUB"
        title={
          <>
            THE SPACE.
            <br />
            <em>THE ENERGY.</em>
          </>
        }
        desc="A closer look at the training atmosphere, the equipment and the everyday work behind progress."
      />
      <section className="gallery-page section-shell">
        <div className="gallery-page-head">
          <Heading kicker="VISUAL JOURNAL">
            TAKE A LOOK
            <br />
            <em>AROUND.</em>
          </Heading>
          <div className="filter-tabs">
            {["All", "Space", "Training"].map((x) => (
              <button
                className={filter === x ? "selected" : ""}
                onClick={() => setFilter(x)}
                key={x}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
        <div className="gallery-masonry">
          {shown.map((g, i) => (
            <motion.button
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`gallery-tile tile-${i % 3}`}
              key={g.src}
              onClick={() => setSelected(g)}
            >
              <img src={g.src} alt={g.label} />
              <span>
                {g.label}
                <ArrowUpRight size={16} />
              </span>
            </motion.button>
          ))}
        </div>
        <p className="disclaimer">
          Achievement gallery photos are illustrative demo imagery, not verified
          photographs of Demo Gym medal wins. Replace them with the gym’s real
          competition, medal and team photos before publishing.
        </p>
      </section>
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <button aria-label="Close image">×</button>
          <img src={selected.src} alt={selected.label} />
          <span>{selected.label}</span>
        </div>
      )}
    </main>
  );
}

function TrainersPage() {
  React.useEffect(
    () =>
      meta(
        "Our Trainers | Demo Gym Ghaziabad",
        "Meet the illustrative coaching team and enquire about personal training at Demo Gym.",
      ),
    [],
  );
  const trainerList = [
    [
      "COACH 01",
      "Strength & conditioning",
      "Build technique, confidence and a progressive routine.",
    ],
    [
      "COACH 02",
      "Personal training",
      "One-to-one guidance shaped around individual goals.",
    ],
    [
      "COACH 03",
      "Functional fitness",
      "Movement quality, stamina and everyday strength.",
    ],
  ];
  const photos = [
    "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85",
  ];
  return (
    <main>
      <PageHero
        kicker="PEOPLE BEHIND THE PROGRESS"
        title={
          <>
            MEET YOUR
            <br />
            <em>COACHING TEAM.</em>
          </>
        }
        desc="Good coaching builds better foundations. Find the support that fits your goals."
      />
      <section className="trainer-section section-shell">
        <div className="section-top">
          <Heading kicker="COACH WITH PURPOSE">
            GOOD COACHING.
            <br />
            <em>BETTER FOUNDATIONS.</em>
          </Heading>
          <p>
            Explore the coaching specialities and contact the team to confirm
            trainer availability, qualifications and personal-training options.
          </p>
        </div>
        <div className="trainer-grid">
          {trainerList.map((t, i) => (
            <Reveal className="trainer-card" key={t[0]} delay={i * 0.08}>
              <div className="trainer-photo">
                <img
                  src={photos[i]}
                  alt="Illustrative fitness coach portrait"
                />
                <span>{t[0]}</span>
              </div>
              <div className="trainer-info">
                <h3>{t[1]}</h3>
                <p>{t[2]}</p>
                <a
                  href={wa(
                    `Hello Demo Gym! Please share the profile and availability of ${t[1]} coach.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  ASK ABOUT COACHING <ArrowUpRight size={14} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="disclaimer">
          Trainer imagery and profiles are illustrative placeholders. Replace
          them with real trainer names, photographs and verified qualifications
          before publishing.
        </p>
      </section>
    </main>
  );
}
function MembershipPage() {
  React.useEffect(
    () =>
      meta(
        "Membership & Pricing | Demo Gym Ghaziabad",
        "Explore sample Demo Gym membership plans and enquire about current pricing.",
      ),
    [],
  );
  return (
    <main>
      <PageHero
        kicker="YOUR NEXT CHAPTER STARTS HERE"
        title={
          <>
            CHOOSE YOUR
            <br />
            <em>COMMITMENT.</em>
          </>
        }
        desc="Straightforward options to help you start training. Ask the team to confirm current prices and inclusions."
      />
      <section className="membership-section section-shell">
        <div className="section-top">
          <Heading kicker="MEMBERSHIP OPTIONS">
            INVEST IN
            <br />
            <em>YOURSELF.</em>
          </Heading>
          <p>
            Choose a starting point. Confirm the details with our team and make
            your first move.
          </p>
        </div>
        <div className="plans-grid">
          {plans.map((p, i) => (
            <Reveal
              className={`plan ${p.popular ? "plan-featured" : ""}`}
              delay={i * 0.1}
              key={p.name}
            >
              {p.popular && (
                <span className="plan-ribbon">MEMBER FAVOURITE</span>
              )}
              <span className="plan-duration">{p.duration}</span>
              <h3>{p.name}</h3>
              <p className="plan-desc">{p.desc}</p>
              <div className="plan-price">
                <sup>₹</sup>
                {p.price.toLocaleString("en-IN")}
                <small> / {p.duration.toLowerCase()}</small>
              </div>
              <div className="plan-divider" />
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <Check size={15} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                className={p.popular ? "btn btn-lime" : "btn btn-outline-light"}
                href={wa(
                  `Hello Demo Gym! I am interested in ${p.name} membership (${p.duration}, ₹${p.price}). Please confirm current price and details.`,
                )}
                target="_blank"
                rel="noreferrer"
              >
                ASK ABOUT THIS PLAN <ArrowUpRight size={16} />
              </a>
            </Reveal>
          ))}
        </div>
        <p className="disclaimer">
          * Demo pricing for presentation only. Confirm current prices, taxes
          and inclusions directly with the gym.
        </p>
      </section>
    </main>
  );
}

function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hey! I'm Demo Gym's virtual assistant. Ask me about memberships, timings, training, location or achievements.",
    },
  ]);
  const answer = (raw) => {
    const q = raw.toLowerCase();
    if (/price|cost|fee|membership|plan|monthly|month/.test(q))
      return `Our demo membership plans are: Essential ₹1,499/month, Momentum ₹3,499/3 months and Commitment ₹5,999/6 months. These are sample prices—please confirm current offers with the owner.`;
    if (/time|timing|open|close|hour/.test(q))
      return `The demo opening hours are ${business.hours}. Please message the owner to confirm today's schedule.`;
    if (/where|location|address|map|ghaziabad/.test(q))
      return `Demo Gym is presented as a Ghaziabad, Uttar Pradesh demo. The exact street address is not confirmed yet. You can explore the area on Google Maps or ask the owner.`;
    if (/trainer|personal|coach/.test(q))
      return `We showcase personal coaching, strength training and functional fitness. Ask the owner about trainer availability and coaching fees.`;
    if (/service|training|workout|gym/.test(q))
      return `Our featured training areas are Strength Training, Personal Coaching and Functional Fitness. Tell me your goal, or contact the owner for a suitable plan.`;
    if (/achievement|award|medal|cni|competition|gold|silver|bronze/.test(q))
      return `The achievements page has a CNI Competition spotlight, but medal counts are awaiting verification from the gym owner. I won't guess or invent results. Tap Contact Owner to request the official medal record.`;
    if (/whatsapp|contact|owner|phone|call/.test(q))
      return `You can contact the gym owner on WhatsApp at ${business.phoneDisplay}.`;
    return `I don't have a verified answer for that yet. I'll connect you with the gym owner so you can get an accurate response.`;
  };
  const send = (e) => {
    e?.preventDefault();
    const q = input.trim();
    if (!q) return;
    const a = answer(q);
    setMessages((m) => [
      ...m,
      { from: "user", text: q },
      {
        from: "bot",
        text: a,
        unknown: /I don't have a verified answer/.test(a),
      },
    ]);
    setInput("");
  };
  return (
    <div className="assistant-widget">
      {open && (
        <div className="assistant-panel">
          <div className="assistant-head">
            <span className="assistant-avatar">DG</span>
            <div>
              <b>DEMO GYM ASSISTANT</b>
              <small>Virtual help · Usually instant</small>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close assistant">
              <X size={17} />
            </button>
          </div>
          <div className="assistant-messages">
            {messages.map((m, i) => (
              <div className={`chat-bubble ${m.from}`} key={i}>
                {m.text}
                {m.unknown && (
                  <a
                    href={wa(
                      `Hello Demo Gym! I have a question: ${messages[i - 1]?.text || "Please help me."}`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    CONTACT OWNER ON WHATSAPP <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="quick-questions">
            {["Membership prices", "Opening hours", "CNI medals"].map((x) => (
              <button
                key={x}
                onClick={() => {
                  setInput(x);
                }}
              >
                {x}
              </button>
            ))}
          </div>
          <form className="assistant-input" onSubmit={send}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask us anything…"
            />
            <button aria-label="Send message">
              <ArrowUpRight size={17} />
            </button>
          </form>
          <a
            className="owner-link"
            href={wa("Hello Demo Gym! I need help from the gym owner.")}
            target="_blank"
            rel="noreferrer"
          >
            Need a person? Contact owner ↗
          </a>
        </div>
      )}
      <button
        className="assistant-launcher"
        onClick={() => setOpen(!open)}
        aria-label="Open AI gym assistant"
      >
        {open ? <X /> : <span className="bot-glyph">AI</span>}
        <span>{open ? "CLOSE" : "ASK GYM AI"}</span>
      </button>
    </div>
  );
}
export default function App() {
  const [dark, setDark] = useState(true);
  return (
    <div className={dark ? "site theme-dark" : "site theme-light"}>
      <Header dark={dark} setDark={setDark} />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/trainers" element={<TrainersPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <ChatAssistant />
    </div>
  );
}
