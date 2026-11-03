
import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h2 className="footer-logo">ÉLORA<span>.</span></h2>
          <div className="footer-line"></div>

          <p>
            Where elegance meets everyday style.
            Discover timeless fashion, beautiful accessories,
            and pieces that express your unique personality.
          </p>

          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <Link href="/">Home</Link>
          <Link href="/product">Collections</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div className="footer-links">
          <h3>Customer Care</h3>
          <Link href="/shipping">Shipping Information</Link>
          <Link href="/returns">Returns & Exchanges</Link>
          <Link href="/faq">Frequently Asked Questions</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>Have a question about your style?</p>
          <Link href="/contact" className="contact-button">
            Contact Our Team ↗
          </Link>

          <div className="footer-note">
            <span>✦</span> Timeless style, made for you.
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ÉLORA. All rights reserved.</p>
        <p>MADE WITH LOVE <span>♥</span> FOR FASHION</p>
      </div>
    </footer>
  );
}
