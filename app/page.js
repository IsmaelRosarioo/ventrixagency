'use client';

import { useEffect, useState } from 'react';
import ThemeScript from '../components/ThemeScript';
import VentrixLogo from '../components/VentrixLogo';

const services = [
  {
    title: 'Lead generation systems',
    text: 'We help home service businesses create a more reliable flow of inbound opportunities from people actively looking for help.'
  },
  {
    title: 'AI agent setup',
    text: 'We build AI-assisted workflows that help reply faster, qualify interest, and reduce missed opportunities.'
  },
  {
    title: 'Conversion optimization',
    text: 'We improve how leads move from inquiry to booked job so your business keeps more of the demand you generate.'
  },
  {
    title: 'Growth strategy',
    text: 'We help sharpen your offer, messaging, and systems so you can scale with better follow-up and clearer positioning.'
  }
];

const industries = ['Roofing', 'HVAC', 'Plumbing', 'Electrical', 'Remodeling', 'Siding & Exterior', 'Landscaping', 'General Home Services'];

const process = [
  {
    step: 'Step 1',
    title: 'Audit the opportunity',
    text: 'We look at your service offer, response speed, lead flow, and biggest gaps in conversion.'
  },
  {
    step: 'Step 2',
    title: 'Build the system',
    text: 'We create the site, messaging, AI support, and lead flow foundation that fits your business.'
  },
  {
    step: 'Step 3',
    title: 'Refine for growth',
    text: 'We keep improving what gets attention, responses, and booked jobs.'
  }
];

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    setTheme(next);
  };

  return (
    <>
      <ThemeScript />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="container nav-shell">
          <a href="#top" className="brand" aria-label="Ventrix home">
            <span className="brand-mark"><VentrixLogo /></span>
            <span className="brand-text">Ventrix</span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#owners">Owners</a>
            <a href="#contact">Contact</a>
            <button type="button" className="theme-button" onClick={toggleTheme} aria-label="Toggle color theme">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">AI systems for home services</p>
              <h1>Ventrix helps home service companies get more customers with modern lead generation and AI support.</h1>
              <p className="hero-text">
                We build client-facing systems for roofing, HVAC, plumbing, remodeling, and other local service businesses that need more leads, faster response times, and a cleaner path to booked work.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Book a strategy call</a>
                <a className="button button-secondary" href="#services">See services</a>
              </div>
              <div className="stat-row">
                <div className="stat-card"><strong>More leads</strong><span>Better demand capture for local service businesses.</span></div>
                <div className="stat-card"><strong>Faster follow-up</strong><span>AI-supported replies so opportunities do not sit cold.</span></div>
                <div className="stat-card"><strong>Better conversion</strong><span>Cleaner systems from first click to booked job.</span></div>
              </div>
            </div>
            <aside className="hero-panel">
              <p className="eyebrow">What clients see</p>
              <div className="panel-stack">
                <div className="panel-card">
                  <small>01</small>
                  <h2>Clear offer positioning</h2>
                  <p>Show homeowners and business owners exactly what the service solves and why they should trust the brand.</p>
                </div>
                <div className="panel-card">
                  <small>02</small>
                  <h2>Lead capture + AI support</h2>
                  <p>Use forms, messaging, and AI workflows to reply quickly and qualify incoming interest.</p>
                </div>
                <div className="panel-card">
                  <small>03</small>
                  <h2>Built to scale later</h2>
                  <p>Start as a simple site now, then expand into CRM, forms, dashboards, or automations as needed.</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Services</p>
              <h2>What Ventrix does</h2>
              <p>We help home service businesses combine digital lead flow with better operational follow-up so growth feels more predictable.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="industries">
          <div className="container narrow-shell">
            <div className="section-head">
              <p className="eyebrow">Home service focus</p>
              <h2>Made for local service businesses</h2>
              <p>Ventrix can be positioned for roofing, HVAC, plumbing, electrical, remodeling, and similar businesses that live or die by response speed and local trust.</p>
            </div>
            <div className="pill-row">
              {industries.map((industry) => (
                <span className="pill" key={industry}>{industry}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Process</p>
              <h2>Simple enough to explain fast</h2>
              <p>This version gives you a practical client-facing site now, while keeping the project ready for forms, database storage, and future automations.</p>
            </div>
            <div className="process-grid">
              {process.map((item) => (
                <article className="card" key={item.title}>
                  <small>{item.step}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="owners">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Founders</p>
              <h2>Founder-led and easy to trust</h2>
              <p>The site includes both owners so prospects see real people behind the company.</p>
            </div>
            <div className="owners-grid">
              <article className="card owner-card">
                <div className="owner-badge">IR</div>
                <h3>Ismael</h3>
                <p className="owner-role">Co-owner · Strategy, systems, and automation</p>
                <p>Helps shape the Ventrix offer around lead generation, AI workflows, and practical systems that support growth.</p>
              </article>
              <article className="card owner-card">
                <div className="owner-badge">AD</div>
                <h3>Aiden</h3>
                <p className="owner-role">Co-owner · Client execution and growth</p>
                <p>Focuses on turning strategy into client-facing delivery with clear communication and implementation.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-wrap">
            <div className="contact-cta">
              <p className="eyebrow">Contact</p>
              <h2>Use your branded domain and email from day one</h2>
              <p>
                Your live site can run on ventrixagency.com while your team emails stay on addresses like ismael@ventrixagency.com, aiden@ventrixagency.com, and hello@ventrixagency.com.
              </p>
            </div>
            <div className="card contact-card">
              <h3>Suggested first setup</h3>
              <ul>
                <li>Website: ventrixagency.com</li>
                <li>Primary CTA email: hello@ventrixagency.com</li>
                <li>Owner emails: ismael@ventrixagency.com and aiden@ventrixagency.com</li>
                <li>Best free deployment target: Vercel</li>
              </ul>
              <a className="button button-primary" href="mailto:hello@ventrixagency.com">Email Ventrix</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
