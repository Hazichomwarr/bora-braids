"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, BookOpen, ChevronRight, Heart, Megaphone, Play, Sparkles, TrendingUp, X } from "lucide-react";
import { useEffect, useState } from "react";
import { announcements, styles, tutorials } from "@/lib/demo/discover-data";

type Detail = { title: string; description: string; image?: boolean; kind: "style" | "story"; serviceId?: string } | null;

const shortcuts = [
  { label: "Trending", icon: TrendingUp, target: "popular-styles" },
  { label: "Tutorials", icon: Play, target: "tutorials" },
  { label: "News", icon: Megaphone, target: "latest-bora" },
  { label: "Featured", icon: Sparkles, target: "community" },
];

export function DiscoverFeed() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [detail, setDetail] = useState<Detail>(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setDetail(null);
      setNotificationsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);
  const toggleFavorite = (id: string) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const scrollTo = (target: string) => document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="discover-page">
      <header className="discover-header">
        <div className="discover-wordmark"><span>BORA</span><span>BRAIDS</span><small>Beauty Club</small></div>
        <button className="icon-button" aria-label="View demo announcements" aria-expanded={notificationsOpen} onClick={() => setNotificationsOpen(!notificationsOpen)}><Bell size={20} /><i /></button>
        {notificationsOpen && <aside className="notification-panel" aria-label="Demo announcements"><strong>From Bora <em>• demo</em></strong><p>Our Beauty Club experience is coming soon.</p><p>Signature styling inspiration awaits.</p></aside>}
      </header>

      <section className="signature-hero" aria-labelledby="signature-title">
        <Image src="/images/discover-demo-hero.png" alt="Demonstration portrait of a woman with bohemian braids" fill priority sizes="(max-width: 639px) 100vw, 430px" />
        <div className="hero-scrim" />
        <div className="hero-copy"><p>Discover your look</p><h1 id="signature-title">Signature<br />Styles</h1><span>Beauty. Community. Culture.</span><Link href="/book" className="primary-button">Book Appointment <ChevronRight size={17} /></Link></div>
        <span className="demo-image-label">Demonstration imagery</span>
      </section>

      <nav className="discovery-shortcuts" aria-label="Discover shortcuts">
        {shortcuts.map(({ label, icon: Icon, target }) => <button key={label} onClick={() => scrollTo(target)}><span><Icon size={19} /></span>{label}</button>)}
      </nav>

      <section id="popular-styles" className="discover-section scroll-target" aria-labelledby="styles-heading">
        <SectionHeading title="Popular Styles" action="View all demo styles" onAction={() => setDetail({ title: "Popular Styles", description: "Explore this curated demonstration collection of signature braided-style inspiration.", kind: "story" })} />
        <div className="style-rail" aria-label="Popular style demonstration cards">
          {styles.slice(0, 4).map((style, index) => <article className="style-card" key={style.id}>
            <button className="style-image-button" aria-label={`Explore ${style.name}`} onClick={() => setDetail({ title: style.name, description: style.description, image: true, kind: "style", serviceId: style.id })}>
              <Image src="/images/discover-demo-hero.png" alt="Demonstration braided hairstyle" fill sizes="145px" className={`style-image image-position-${index}`} />
            </button>
            <button className={`heart-button ${favorites.includes(style.id) ? "is-favorite" : ""}`} aria-label={`${favorites.includes(style.id) ? "Remove" : "Add"} ${style.name} from demo favorites`} aria-pressed={favorites.includes(style.id)} onClick={() => toggleFavorite(style.id)}><Heart size={16} fill={favorites.includes(style.id) ? "currentColor" : "none"} /></button>
            <button className="style-text-button" onClick={() => setDetail({ title: style.name, description: style.description, image: true, kind: "style", serviceId: style.id })}><strong>{style.name}</strong><span>{style.descriptor}</span></button>
          </article>)}
        </div>
        <p className="demo-note">Illustrative styles for this presentation only.</p>
      </section>

      <section id="community" className="discover-section scroll-target" aria-labelledby="community-heading">
        <SectionHeading title="From Our Community" />
        <div className="community-card"><Image src="/images/discover-demo-hero.png" alt="Demonstration community hairstyle post" width={112} height={138} /><div><p className="community-meta"><Sparkles size={13} /> Featured demo</p><h3>Community inspiration, shared beautifully.</h3><p className="community-caption">A sample preview of how members will be able to celebrate their looks together.</p><Link href="/community" className="text-link">Visit Community <ChevronRight size={15} /></Link></div></div>
        <Link href="/community" className="share-link">Share Your Look or Thought <ChevronRight size={17} /></Link>
        <p className="demo-note">Sample community content — not a customer post or testimonial.</p>
      </section>

      <section id="tutorials" className="discover-section scroll-target" aria-labelledby="tutorials-heading">
        <SectionHeading title="Beauty & Inspiration" />
        <div className="story-list">{tutorials.map((tutorial, index) => <button className="story-card" key={tutorial.title} onClick={() => setDetail({ ...tutorial, kind: "story" })}><span className={`story-visual story-visual-${index}`}><BookOpen size={20} /></span><span><strong>{tutorial.title}</strong><small>{tutorial.description}</small></span><ChevronRight size={18} /></button>)}</div>
      </section>

      <section id="latest-bora" className="discover-section scroll-target" aria-labelledby="news-heading">
        <SectionHeading title="Latest from Bora" />
        <div className="announcement-list">{announcements.map((announcement) => <button key={announcement.title} onClick={() => setDetail({ title: announcement.title, description: announcement.detail, kind: "story" })}><span><Megaphone size={17} /></span><span><strong>{announcement.title}</strong><small>{announcement.detail}</small></span><ChevronRight size={17} /></button>)}</div>
        <p className="demo-note">Demonstration announcements for the presentation.</p>
      </section>

      <section className="luxury-preview" aria-labelledby="luxury-heading">
        <Image src="/images/luxury-hair-demo.png" alt="Generic unbranded demonstration hair-care products" fill sizes="(max-width: 639px) 100vw, 430px" />
        <div className="luxury-overlay"><p>Bora introduces</p><h2 id="luxury-heading">Luxury<br />Hair</h2><span>Future care rituals for beautiful results.</span><Link href="/shop" className="light-button">Explore the Shop <ChevronRight size={16} /></Link></div>
        <span className="demo-image-label">Demo product imagery</span>
      </section>

      {detail && <div className="detail-backdrop" role="presentation" onMouseDown={() => setDetail(null)}><section className="detail-sheet" role="dialog" aria-modal="true" aria-labelledby="detail-title" onMouseDown={(event) => event.stopPropagation()}><button className="close-button" aria-label="Close demo details" onClick={() => setDetail(null)}><X size={19} /></button>{detail.image && <div className="detail-image"><Image src="/images/discover-demo-hero.png" alt="Demonstration hairstyle detail" fill sizes="360px" /></div>}<p className="section-eyebrow">Demo preview</p><h2 id="detail-title">{detail.title}</h2><p>{detail.description}</p>{detail.kind === "style" ? <Link href={`/book?service=${detail.serviceId ?? ""}&source=discover`} className="primary-button">Book This Style <ChevronRight size={17} /></Link> : <button className="primary-button" onClick={() => setDetail(null)}>Back to Discover</button>}</section></div>}
    </div>
  );
}

function SectionHeading({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) { return <div className="section-heading"><h2>{title}</h2>{action && <button onClick={onAction}>{action}</button>}</div>; }
