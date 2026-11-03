
export const metadata = {
  title: "Contact | Shopex",
  description: "Get in touch with the Shopex team.",
};

import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact-page">

      {/* Heading */}
      <section className="contact-heading">
        <p>WE WOULD LOVE TO HEAR FROM YOU</p>
        <h1>Let's Talk <span>Fashion.</span></h1>
        <div className="contact-line"></div>
        <p className="contact-intro">
          Have a question or need assistance?
          We're always happy to help you.
        </p>
      </section>

      {/* Contact Content */}
      <section className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">
          <p className="contact-label">GET IN TOUCH</p>
          <h2>We're here for you.</h2>
          <p className="contact-description">
            Whether you have a question about our products,
            orders, or anything else, feel free to reach out.
          </p>

          <div className="contact-detail">
            <span className="contact-icon">✉</span>
            <div>
              <h3>Email Us</h3>
              <p>support@shopex.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon">☎</span>
            <div>
              <h3>Call Us</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon">⌖</span>
            <div>
              <h3>Our Location</h3>
              <p>Kerala, India</p>
            </div>
          </div>

          <div className="contact-social">
            <p>FOLLOW OUR JOURNEY</p>
            <div>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-box">
          <p className="contact-label">SEND US A MESSAGE</p>
          <h2>How can we help?</h2>

          <form className="contact-form">
            <div className="contact-input-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact-input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="contact-input-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="What is this about?"
                required
              />
            </div>

            <div className="contact-input-group">
              <label>Your Message</label>
              <textarea
                placeholder="Write your message here..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message <span>→</span>
            </button>
          </form>
        </div>

      </section>

      {/* Bottom Message */}
      <section className="contact-bottom">
        <h2>Thank you for choosing <span>Shopex.</span></h2>
        <p>Your style, our passion.</p>
      </section>

    </main>
  );
}
