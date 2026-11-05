import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  Dumbbell,
  Sun,
  Moon,
  Phone,
  Bot,
  MessageCircle,
  Send,
  Clock,
  Languages,
} from "lucide-react";
import { site } from "../data/site.js";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Programs", "/programs"],
  ["Trainers", "/trainers"],
  ["Membership", "/membership"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

function GoogleTranslate() {
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi",
            autoDisplay: false,
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element",
        );
      }
    };
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="translate-wrap">
      <Languages size={15} />
      <span>LANGUAGE</span>
      <div
        id="google_translate_element"
        aria-label="Translate website to Hindi or English"
      />
    </div>
  );
}

export function GymAssistant() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I’m the DEMO GYM assistant. Ask me about opening hours, memberships, training or a trial visit.",
    },
  ]);
  const answer = (q) => {
    const t = q.toLowerCase();
    if (/hour|time|open|close|sunday|monday/.test(t))
      return "We are open Monday to Saturday, 5:00 AM–10:00 PM. Sunday is currently listed as closed. Please call the owner to confirm holiday hours.";
    if (/price|fee|membership|plan|cost/.test(t))
      return "Our sample plans are Monthly ₹1,999, Quarterly ₹4,999 and Yearly ₹14,999. These are demo prices—please confirm the current offer with the owner.";
    if (/trainer|personal|coach/.test(t))
      return "We list strength, personal-training and conditioning support. Contact the owner to confirm coach availability and personal-training fees.";
    if (/trial|visit|join|admission/.test(t))
      return "You can request a trial visit or membership enquiry by calling or WhatsApping the owner. We recommend confirming a slot before visiting.";
    if (/where|location|address|map/.test(t))
      return "We are listed in Ghaziabad, Uttar Pradesh. The exact street address is not configured in this demo, so please contact the owner for directions.";
    if (/protein|diet|workout|beginner|goal/.test(t))
      return "Start with a realistic goal, correct technique and a consistent routine. For a personalised plan, please speak directly with the owner or a qualified trainer.";
    return "I can help with opening hours, sample membership plans, training, trial visits and location. For anything else, please contact owner Aman Ahmad directly.";
  };
  const send = (value = question) => {
    const q = value.trim();
    if (!q) return;
    setMessages((m) => [
      ...m,
      { from: "user", text: q },
      { from: "bot", text: answer(q) },
    ]);
    setQuestion("");
  };
  return (
    <>
      <button
        className="ai-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open AI gym assistant"
      >
        <Bot size={20} />
        <span>ASK GYM AI</span>
      </button>
      {open && (
        <section className="ai-panel" aria-label="Gym assistant chat">
          <div className="ai-head">
            <div>
              <b>
                <Bot size={17} /> DEMO GYM AI
              </b>
              <small>Quick answers · 24/7 demo assistant</small>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close assistant">
              <X size={18} />
            </button>
          </div>
          <div className="ai-messages">
            {messages.map((m, i) => (
              <p key={i} className={"ai-msg " + m.from}>
                {m.text}
              </p>
            ))}
          </div>
          <div className="ai-quick">
            {["Opening hours", "Membership prices", "Book a trial"].map((x) => (
              <button key={x} onClick={() => send(x)}>
                {x}
              </button>
            ))}
          </div>
          <form
            className="ai-input"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a gym question…"
              aria-label="Ask a question"
            />
            <button aria-label="Send question">
              <Send size={17} />
            </button>
          </form>
          <a
            className="ai-owner"
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Aman, I have another question about DEMO GYM.")}`}
            target="_blank"
            rel="noreferrer"
          >
            Need more help? Contact Aman Ahmad <ArrowUpRight size={14} />
          </a>
        </section>
      )}
    </>
  );
}

function ThemeToggle() {
  const [light, setLight] = useState(() => {
    try {
      return (localStorage.getItem("xyz-theme") || "light") === "light";
    } catch {
      return true;
    }
  });
  useEffect(() => {
    const theme = light ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem("xyz-theme", theme);
    } catch {
      /* storage may be disabled */
    }
  }, [light]);
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setLight((value) => !value)}
      aria-label={`Switch to ${light ? "dark" : "light"} theme`}
      aria-pressed={!light}
      title={`Switch to ${light ? "dark" : "light"} theme`}
    >
      {light ? (
        <Moon size={16} aria-hidden="true" />
      ) : (
        <Sun size={16} aria-hidden="true" />
      )}
      <span>{light ? "DARK" : "LIGHT"}</span>
    </button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topline">
        GHAZIABAD, UTTAR PRADESH <span>·</span> OWNER: AMAN AHMAD <span>·</span>{" "}
        MON–SAT 5 AM–10 PM
      </div>
      <header className="nav">
        <Link
          to="/"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="DEMO GYM home"
        >
          <span className="brand-mark">
            <Dumbbell size={21} />
          </span>
          <span>
            DEMO GYM<span className="brand-dot">.</span>
            <small>FITNESS CLUB</small>
          </span>
        </Link>
        <nav
          className={open ? "nav-links show" : "nav-links"}
          aria-label="Main navigation"
        >
          {links.map(([n, p]) => (
            <NavLink
              key={p}
              to={p}
              end={p === "/"}
              onClick={() => setOpen(false)}
            >
              {n}
            </NavLink>
          ))}
          <a
            className="nav-phone"
            href={`tel:${site.phoneLink}`}
            aria-label={`Call ${site.phone}`}
          >
            <Phone size={15} />
          </a>
          <Link
            className="nav-cta"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            JOIN THE CLUB <ArrowUpRight size={16} />
          </Link>
        </nav>
        <div className="nav-tools">
          <GoogleTranslate />
          <ThemeToggle />
          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-mark">
              <Dumbbell size={21} />
            </span>
            <span>
              DEMO GYM<span className="brand-dot">.</span>
              <small>FITNESS CLUB</small>
            </span>
          </Link>
          <p>
            Train with purpose. Move with confidence.
            <br />A stronger routine starts with one session.
          </p>
        </div>
        <div>
          <h4>EXPLORE</h4>
          {links.slice(1, 6).map(([n, p]) => (
            <Link key={p} to={p}>
              {n}
            </Link>
          ))}
        </div>
        <div>
          <h4>GET IN TOUCH</h4>
          <b className="owner-name">Owner: {site.owner}</b>
          <a href={`tel:${site.phoneLink}`}>{site.phone}</a>
          <span>{site.address}</span>
          <span>{site.hours}</span>
          <a href={site.mapUrl} target="_blank" rel="noreferrer">
            Directions in Ghaziabad ↗
          </a>
        </div>
        <div>
          <h4>START HERE</h4>
          <Link to="/contact">Book an intro visit ↗</Link>
          <Link to="/faq">Frequently asked questions</Link>
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi DEMO GYM, I would like to enquire about membership.")}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp us ↗
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} DEMO GYM. ALL RIGHTS RESERVED.</span>
        <div>
          <Link to="/privacy">PRIVACY</Link>
          <Link to="/terms">TERMS</Link>
        </div>
        <span>BUILT FOR PROGRESS · GHAZIABAD</span>
      </div>
    </footer>
  );
}

export function WhatsApp() {
  return (
    <a
      className="whatsapp"
      href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi DEMO GYM, I would like to know more about membership and a trial visit in Ghaziabad.")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Enquire with DEMO GYM on WhatsApp"
    >
      <span>WA</span>
      <b>ENQUIRE</b>
    </a>
  );
}

