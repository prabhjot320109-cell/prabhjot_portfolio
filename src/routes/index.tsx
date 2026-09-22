import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import afterFeed from "@/assets/after.png";
import beforeFeed from "@/assets/before.png";
import carpentryMaths from "@/assets/b1.png";
import carpentryMeasure from "@/assets/b2.png";
import carpentryTools from "@/assets/b3.png";
import heroImage from "@/assets/hero.png";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";
import logo3 from "@/assets/logo3.png";
import logo4 from "@/assets/logo4.png";
import paintingCompany from "@/assets/a2.png";
import paintingHours from "@/assets/a1.png";
import paintingPaintbrush from "@/assets/a3.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prabhjot Singh — Social Media for Australian VET Colleges" },
      {
        name: "description",
        content:
          "Social media management, content strategy, copywriting and design for Australian VET and education brands.",
      },
      { property: "og:title", content: "Prabhjot Singh — Social Media for Australian VET Colleges" },
      {
        property: "og:description",
        content:
          "Turning courses, student experiences and career opportunities into social content that gets attention and drives enquiries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const navItems = [
  ["Case Study", "#case-study"],
  ["Content Strategy", "#strategy"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const;

const services = ["Social Media Management", "Content Strategy", "Copywriting", "Design"];

const clientLogos = [
  { src: logo1, name: "Ashford College" },
  { src: logo4, name: "Albury College" },
  { src: logo3, name: "LéPONT International College" },
  { src: logo2, name: "Apsley College" },
];

const workImages = [
  { src: paintingHours, alt: "Albury College post: 7 Hours of Painting?" },
  { src: paintingCompany, alt: "Albury College post: From First Coat to Your Own Company" },
  { src: paintingPaintbrush, alt: "Albury College post: Painting Is More Than Just a Paintbrush" },
];

const carpentryImages = [
  { src: carpentryMaths, alt: "Albury College post: Bad at Maths? You can still become a Carpenter" },
  { src: carpentryMeasure, alt: "Albury College post: Measure carefully. Cut accurately. Build it right" },
  { src: carpentryTools, alt: "Albury College post: Know Your Tools — Carpentry Edition" },
];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setLightbox(null);
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <main id="top" className="overflow-clip bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="page-shell grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center">
          <a href="#top" className="font-display text-sm font-bold uppercase tracking-[0.12em]">
            Prabhjot Singh
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="icon-button lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="page-shell grid border-t border-border py-5 lg:hidden" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="border-b border-border py-3 text-base font-semibold" onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="about" className="hero-section page-shell" data-reveal>
        <div className="hero-copy">
          <p className="eyebrow text-accent">Social Media · Content · Copy · Design</p>
          <div className="hero-name-row">
            <h1 className="hero-name">PRABHJOT SINGH</h1>
            <img src={heroImage} alt="Prabhjot Singh" className="hero-portrait" />
          </div>
          <h2 className="hero-positioning">Social Media for Australian VET Colleges</h2>
          <p className="hero-summary">
            I help <strong className="text-foreground">VET colleges</strong> turn courses, student experiences and career opportunities into social content that gets attention and drives enquiries
          </p>
          <div className="hero-services">
            {services.map((service, index) => <span key={service}><b>0{index + 1}</b>{service}</span>)}
          </div>
          <div className="hero-actions">
            <a href="#work" className="button-secondary">View My Work</a>
            <a href="#contact" className="button-secondary">Let's Work Together</a>
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="page-shell py-20 md:py-28" data-reveal>
          <div className="credentials-grid">
            {[
              ["4", "VET / Education Clients"],
              ["2+", "Years in Social Media & Content"],
              ["AU", "Australian Client Experience"],
            ].map(([value, label]) => (
              <div key={label} className="credential-item">
                <strong>{value}</strong>
                <p>{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <p className="eyebrow text-ink-muted">Clients &amp; Experience</p>
            <div className="client-logo-panel">
              <ul aria-label="Clients" className="grid grid-cols-2 gap-px bg-ink/30 lg:grid-cols-4">
                {clientLogos.map((client) => (
                  <li key={client.name} className="flex h-40 items-center justify-center bg-white px-6 md:h-48">
                    <img src={client.src} alt={client.name} loading="lazy" className="h-24 w-28 max-w-full object-contain" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="case-study" className="section-space border-b border-border">
        <div className="page-shell" data-reveal>
          <p className="eyebrow text-accent">Case Study / Albury College</p>
          <h2 className="mt-8 max-w-6xl font-display text-[clamp(3.2rem,8vw,8.5rem)] font-bold uppercase leading-[0.88]">
            15 days. One brand. <span className="outline-type">Zero random posts.</span>
          </h2>
        </div>
      </section>

      <section id="work" className="page-shell section-space">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24" data-reveal>
          <button type="button" className="image-frame group order-2 lg:order-1" onClick={() => setLightbox({ src: beforeFeed, alt: "Previous Albury College social media feed" })}>
            <img src={beforeFeed} alt="Previous Albury College social media feed" />
            <span className="image-label">Open image <ArrowUpRight size={15} /></span>
          </button>
          <div className="order-1 lg:order-2 lg:pt-10">
            <p className="step-number">01</p>
            <h3 className="section-title">Before</h3>
            <p className="mt-8 text-xl leading-relaxed md:text-3xl">Turning generic course posters into content that speaks for your college as a brand</p>
            <ul className="editorial-list mt-10">
              <li>Generic course-led messaging</li><li>Inconsistent visual language</li><li>Limited content variety</li><li>No clear recurring content pillars</li><li>Posts designed individually rather than as part of a larger feed</li>
            </ul>
            <div className="mt-12 border-l-2 border-accent pl-6">
              <strong className="text-lg">The result?</strong>
              <p className="mt-3 max-w-lg text-lg leading-relaxed text-muted-foreground">The college was posting, but the feed wasn't building a strong, recognisable brand.</p>
            </div>
          </div>
        </div>

        <div className="my-20 flex items-center gap-4" aria-hidden="true"><span className="h-px flex-1 bg-border" /><ArrowDownRight className="text-accent" /><span className="h-px w-12 bg-border" /></div>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24" data-reveal>
          <div className="lg:pt-10">
            <p className="step-number">02</p>
            <h3 className="section-title">After</h3>
            <p className="mt-8 text-xl leading-relaxed md:text-3xl">Every post had a purpose. Every piece looked like it belonged to the same brand</p>
            <div className="mt-10">
              <strong className="text-lg">The outcome</strong>
              <ul className="editorial-list mt-5"><li>A more recognisable visual identity.</li><li>More varied and engaging content.</li><li>Clearer course communication.</li><li>A feed designed as a brand, not a noticeboard.</li></ul>
            </div>
            <p className="mt-12 max-w-xl border-t border-foreground pt-6 text-xl font-semibold leading-snug">Don't just post images, curate a content that's written for your audience.</p>
          </div>
          <button type="button" className="image-frame group" onClick={() => setLightbox({ src: afterFeed, alt: "Redesigned Albury College Instagram feed" })}>
            <img src={afterFeed} alt="Redesigned Albury College Instagram feed" />
            <span className="image-label">Open image <ArrowUpRight size={15} /></span>
          </button>
        </div>
      </section>

      <section id="strategy" className="bg-soft section-space">
        <div className="page-shell" data-reveal>
          <p className="eyebrow text-accent">Content strategy / 01</p>
          <h2 className="mt-6 max-w-6xl font-display text-[clamp(1.5rem,7vw,7rem)] font-bold uppercase leading-[0.9]">
            <span className="block whitespace-nowrap">Content that</span>
            <span className="block whitespace-nowrap">sparks curiosity</span>
          </h2>
          <div className="mt-12 grid gap-4 border-t border-foreground pt-8 md:grid-cols-2">
            <p className="mx-auto max-w-5xl pt-4 text-center text-2xl font-semibold leading-tight tracking-tight md:col-span-2 md:pt-8 md:text-4xl"><strong>Instead of posting–</strong> <span className="text-accent">“Join our Painting Course”</span></p>
            <p className="text-center text-2xl font-bold md:col-span-2 md:text-3xl">I made content that sparked interest</p>
          </div>
        </div>
        <p className="mt-10 w-full px-4 text-center font-display text-xl font-bold leading-tight tracking-tight text-foreground lg:whitespace-nowrap lg:px-[0.5vw] lg:text-[1.85vw]" data-reveal>
          Content that hits at the right place- <span className="underline decoration-accent underline-offset-4">Answering Emotions, Uncertainty, Ambition, Misconceptions</span>
        </p>
        <div className="page-shell" data-reveal>
          <WorkGallery items={workImages} onOpen={setLightbox} />
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell" data-reveal>
          <p className="eyebrow text-accent">Content strategy / 02</p>
          <p className="mt-6 max-w-6xl font-display text-[clamp(2rem,4.5vw,4.75rem)] font-semibold leading-[1.05]">NOT just- “Join Certificate III in Carpentry. Hands on training & Learn industry relevant skills”</p>
          <WorkGallery items={carpentryImages} onOpen={setLightbox} />
          <p className="mt-14 max-w-5xl text-2xl font-semibold leading-snug md:text-4xl">But inviting a larger audience into the funnel by answering questions that come in a student's mind</p>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground section-space">
        <div className="page-shell" data-reveal>
          <p className="eyebrow text-accent-light">The content mix</p>
          <h2 className="mt-6 max-w-5xl font-display text-[clamp(3rem,7vw,7rem)] font-bold uppercase leading-[0.9]">Your feed shouldn't feel like a brochure.</h2>
          <div className="mt-16 flex h-5 w-full overflow-hidden" aria-label="Content mix proportions">
            <span className="w-[30%] bg-accent" /><span className="w-[20%] bg-blue-mid" /><span className="w-[20%] bg-blue-light" /><span className="w-[20%] bg-warm" /><span className="w-[10%] bg-paper" />
          </div>
          <div className="mt-8 grid gap-px bg-ink-border md:grid-cols-5">
            {[
              ["30%", "Educate", "Trade knowledge, tips, tools, explainers", "text-accent"],
              ["20%", "Inspire", "Career possibilities, student journeys", "text-blue-mid"],
              ["20%", "Experience", "Workshops, campus, trainers, students", "text-blue-light"],
              ["20%", "Promote", "Courses, intakes, enrolment", "text-warm"],
              ["10%", "Engage", "Questions, myths, quizzes, opinions", "text-paper"],
            ].map(([percentage, title, description, color]) => <div key={title} className="bg-ink p-6"><strong className={`text-3xl ${color}`}>{percentage}</strong><h3 className="mt-8 font-display text-lg font-bold uppercase">{title}</h3><p className="mt-3 text-sm leading-relaxed text-ink-muted">{description}</p></div>)}
          </div>
        </div>
      </section>

      <section id="services" className="page-shell section-space">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]" data-reveal>
          <div><p className="eyebrow text-accent">Services</p><h2 className="mt-6 font-display text-5xl font-bold md:text-7xl">Strategy, words and visual systems.</h2></div>
          <div className="border-t border-foreground">
            {[
              ["01", "Social Media Management", "Shaping a purposeful feed where every post contributes to a recognisable brand."],
              ["02", "Content Strategy", "Building clear content pillars around education, inspiration, experience, promotion and engagement."],
              ["03", "Copywriting", "Turning course information into audience-focused ideas that answer questions and spark interest."],
              ["04", "Design", "Creating a consistent visual language so individual posts work together as one feed."],
            ].map(([number, title, copy]) => <article key={title} className="service-row"><span className="text-sm text-accent">{number}</span><h3 className="font-display text-2xl font-semibold md:text-3xl">{title}</h3><p className="text-sm leading-relaxed text-muted-foreground md:text-base">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-accent text-accent-foreground">
        <div className="page-shell py-20 md:py-28" data-reveal>
          <p className="eyebrow">Let's work together</p>
          <h2 className="mt-6 max-w-6xl font-display text-[clamp(3.3rem,8vw,8rem)] font-bold leading-[0.88]">Let's build a social presence that feels like a brand.</h2>
          <div className="mt-14 grid gap-8 border-t border-accent-foreground/40 pt-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="flex max-w-2xl flex-wrap gap-x-6 gap-y-2 text-sm font-semibold uppercase">{services.map((service) => <span key={service}>{service}</span>)}</div>
            <Dialog>
              <DialogTrigger asChild>
                <button type="button" className="button-light">Let's Talk <ArrowUpRight size={19} /></button>
              </DialogTrigger>
              <DialogContent className="w-[calc(100%-2rem)] text-foreground sm:p-8">
                <DialogHeader>
                  <DialogTitle className="font-display text-3xl">Let's Talk</DialogTitle>
                  <DialogDescription>Get in touch with Prabhjot Singh by email or phone.</DialogDescription>
                </DialogHeader>
                <div className="mt-3 grid gap-5">
                  <div>
                    <p className="mb-2 text-sm text-muted-foreground">Email</p>
                    <a className="break-all text-lg font-semibold underline decoration-accent underline-offset-4" href="mailto:prabhjot320109@gmail.com">prabhjot320109@gmail.com</a>
                  </div>
                  <div>
                    <p className="mb-2 text-sm text-muted-foreground">Mobile</p>
                    <a className="text-lg font-semibold underline decoration-accent underline-offset-4" href="tel:+916390020578">+91 63900 20578</a>
                  </div>
                </div>
                <DialogClose asChild>
                  <button type="button" className="mt-4 cursor-pointer rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">OK</button>
                </DialogClose>
              </DialogContent>
            </Dialog>
          </div>
          <div className="mt-20 flex items-center justify-between border-t border-accent-foreground/40 pt-5 text-xs uppercase"><span>Prabhjot Singh</span><span>Social Media for Australian VET Colleges</span></div>
        </div>
      </footer>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.alt} onMouseDown={(event) => event.currentTarget === event.target && setLightbox(null)}>
          <button type="button" className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close image"><X size={22} /></button>
          <img src={lightbox.src} alt={lightbox.alt} />
        </div>
      )}
    </main>
  );
}

function WorkGallery({ items, onOpen }: { items: { src: string; alt: string }[]; onOpen: (item: { src: string; alt: string }) => void }) {
  return <div className="mt-14 grid gap-5 md:grid-cols-3">{items.map((item, index) => <button type="button" className="work-tile group" key={item.alt} onClick={() => onOpen(item)}><img src={item.src} alt={item.alt} /><span className="work-index">0{index + 1}</span><span className="work-open"><ArrowUpRight size={18} /></span></button>)}</div>;
}
