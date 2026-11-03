
export const metadata = {
  title: "About | Shopex",
  description: "Discover the story behind Shopex and our love for fashion.",
};

import Image from "next/image";
import "./About.css";

export default function About() {
  return (
    <main className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-label">THE STORY OF SHOPEX</p>

          <h1>
            Fashion is an art.
            <br />
            <span>Make it yours.</span>
          </h1>

          <p className="about-hero-description">
            We believe every outfit tells a story.
            Discover timeless styles, beautiful details,
            and fashion that celebrates you.
          </p>

          <a href="/Product" className="about-shop-btn">
            EXPLORE COLLECTION <span>→</span>
          </a>
        </div>

        <div className="about-hero-image">
          <Image
            src="/banner2.jpg"
            alt="Shopex fashion collection"
            width={700}
            height={650}
            priority
          />

          <div className="about-image-note">
            <span>01 / 03</span>
            <p>STYLE THAT SPEAKS</p>
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="about-intro">
        <p className="about-label">WELCOME TO SHOPEX</p>

        <h2>
          More than fashion.
          <br />
          <span>It's your identity.</span>
        </h2>

        <p className="about-intro-text">
          At Shopex, we believe fashion is more than just clothing.
          It is a beautiful way to express your personality,
          confidence, and individuality. We bring together
          contemporary trends and timeless elegance to make
          every style feel special.
        </p>
      </section>

      {/* Brand Story */}
      <section className="about-story">
        <div className="about-story-image">
          <Image
            src="/banner.jpg"
            alt="Fashion and lifestyle"
            width={600}
            height={650}
          />
        </div>

        <div className="about-story-content">
          <p className="about-label">OUR PHILOSOPHY</p>

          <h2>
            Designed for
            <br />
            <span>your everyday elegance.</span>
          </h2>

          <p>
            From everyday essentials to statement pieces,
            our collections are thoughtfully selected to
            bring style and comfort together.
          </p>

          <p>
            We want every shopping experience to inspire you
            to explore your style, try something new, and
            feel confident in everything you wear.
          </p>

          <div className="about-signature">
            Shopex.
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-values">
        <div className="about-values-heading">
          <p className="about-label">THE SHOPEX EXPERIENCE</p>
          <h2>What Makes Us Special?</h2>
          <p>Little details that make your shopping experience better.</p>
        </div>

        <div className="about-values-grid">

          <div className="about-value-card">
            <span className="about-value-number">01</span>
            <div className="about-value-icon">✧</div>
            <h3>Trendy Collections</h3>
            <p>
              Explore stylish collections inspired by
              the latest fashion trends.
            </p>
          </div>

          <div className="about-value-card">
            <span className="about-value-number">02</span>
            <div className="about-value-icon">♡</div>
            <h3>Style & Comfort</h3>
            <p>
              Discover fashion that brings together
              comfort, beauty, and elegance.
            </p>
          </div>

          <div className="about-value-card">
            <span className="about-value-number">03</span>
            <div className="about-value-icon">◇</div>
            <h3>Easy Shopping</h3>
            <p>
              Enjoy a simple and convenient way
              to discover your favourite styles.
            </p>
          </div>

        </div>
      </section>

      
    </main>
  );
}
