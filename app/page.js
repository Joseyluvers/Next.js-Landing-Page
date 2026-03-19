export default function Home() {
  return (
    <main className="page-shell">
      <div className="glow glow-a" />
      <div className="glow glow-b" />

      <header className="site-header">
        <p className="brand">Joseyluvers</p>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#results">Results</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <a className="button ghost" href="#contact">Book Call</a>
      </header>

      <section className="hero">
        <p className="eyebrow">Design + Engineering for Growth Teams</p>
        <h1>
          We build launch-ready
          <span>landing pages that sell</span>
        </h1>
        <p className="hero-copy">
          From messaging to motion, we ship high-converting pages in days, not months. Built with modern stacks, tuned for speed, and designed to feel unforgettable.
        </p>
        <div className="hero-actions">
          <a className="button solid" href="#contact">Start Your Project</a>
          <a className="button text" href="#results">See Case Studies</a>
        </div>
        <ul className="metrics" id="results">
          <li>
            <strong>+43%</strong>
            <span>Average lift in lead conversion</span>
          </li>
          <li>
            <strong>72 hrs</strong>
            <span>Typical first production draft</span>
          </li>
          <li>
            <strong>99+</strong>
            <span>Performance score on core pages</span>
          </li>
        </ul>
      </section>

      <section className="services" id="services">
        <article>
          <h3>Message Strategy</h3>
          <p>We shape your value proposition into clear, conversion-focused copy blocks.</p>
        </article>
        <article>
          <h3>Visual Direction</h3>
          <p>Distinctive art direction, typography, and motion that make your brand memorable.</p>
        </article>
        <article>
          <h3>Production Build</h3>
          <p>Clean Next.js code, fast load times, responsive layouts, and analytics-ready handoff.</p>
        </article>
      </section>

      <section className="pricing" id="pricing">
        <div className="pricing-copy">
          <p className="eyebrow">Simple Pricing</p>
          <h2>One package. No hidden scope traps.</h2>
          <p>
            Perfect for startups and product teams that need a polished launch page without a six-week agency timeline.
          </p>
        </div>
        <div className="pricing-card">
          <p className="plan">Launch Sprint</p>
          <p className="price">$2,900</p>
          <ul>
            <li>Custom design direction</li>
            <li>Responsive Next.js implementation</li>
            <li>On-page SEO + metadata setup</li>
            <li>1 week post-launch support</li>
          </ul>
          <a className="button solid" href="#contact">Reserve This Month</a>
        </div>
      </section>

      <section className="testimonial">
        <blockquote>
          “Our paid campaigns became instantly more efficient. The new page looked premium and started converting in the first week.”
        </blockquote>
        <p>- Ayinmode J Seye., Growth Lead at Joseyluvers</p>
      </section>

      <footer className="site-footer" id="contact">
        <h2>Ready to ship your next landing page?</h2>
        <a className="button solid" href="mailto:josephseye3@gmail.com">Josephseye3@gmail.com</a>
      </footer>
    </main>
  );
}
