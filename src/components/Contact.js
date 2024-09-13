import React from 'react';
import './Contact.css'; // Importing the CSS file for styles

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us with any questions or feedback.</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Our Information</h2>
          <div className="info-item">
            <h3>Address</h3>
            <p>123 Street Green Park Shalamar Town LHR.</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>04224788212</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>contact@blissfulbite.com</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
