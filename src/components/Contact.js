import React from 'react';
import './Contact.css'; 

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Contact Us</h1>
          <p className="lead">We'd love to hear from you! Reach out to us with any questions or feedback.</p>
        </div>
      </section>
      <section className="contact-content container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="contact-info bg-white p-4 rounded shadow">
              <h2 className="h4 mb-3">Our Information</h2>
              <div className="info-item mb-3">
                <h3 className="h5">Address</h3>
                <p>123 Street Green Park Shalamar Town LHR.</p>
              </div>
              <div className="info-item mb-3">
                <h3 className="h5">Phone</h3>
                <p>04224788212</p>
              </div>
              <div className="info-item mb-3">
                <h3 className="h5">Email</h3>
                <p>contact@blissfulbite.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-form bg-white p-4 rounded shadow">
              <h2 className="h4 mb-3">Send Us a Message</h2>
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" className="form-control" required />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" className="form-control" required />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" className="form-control" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactPage;
