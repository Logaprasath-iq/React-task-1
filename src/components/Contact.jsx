import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submittedStatus, setSubmittedStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill out all required fields (Name, Email, and Message).');
      return;
    }

    // Success alert as requested
    alert(
      `Thank you, ${formData.name}! Your message regarding "${formData.subject || 'Inquiry'}" has been sent successfully. We will get back to you shortly!`
    );

    // Show inline success message
    setSubmittedStatus(true);

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setTimeout(() => {
      setSubmittedStatus(false);
    }, 6000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">GET IN TOUCH</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions about catering, reservations, or our menu? We'd love
            to hear from you. Send us a message or visit us today!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Information Cards */}
          <div className="contact-info-column">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-desc">
              Whether you want to book a table for a special dinner or inquire
              about custom bulk orders, our support team is available 7 days a
              week.
            </p>

            <div className="contact-details">
              <div className="contact-card">
                <div className="contact-card-icon">📍</div>
                <div className="contact-card-text">
                  <h4>Our Address</h4>
                  <p>123 Gourmet Boulevard, Foodville, Mumbai, MH 400001</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">📞</div>
                <div className="contact-card-text">
                  <h4>Phone Number</h4>
                  <p>+91 98765 43210 / +91 22 8765 4321</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">✉️</div>
                <div className="contact-card-text">
                  <h4>Email Address</h4>
                  <p>hello@foodierestaurant.com</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">⏰</div>
                <div className="contact-card-text">
                  <h4>Opening Hours</h4>
                  <p>Mon - Sun: 10:00 AM – 11:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h3 className="form-title">Send Us a Message</h3>

              {submittedStatus && (
                <div className="form-success-banner" role="alert">
                  ✓ Message sent successfully! Our team will respond within 24 hours.
                </div>
              )}

              <div className="form-group">
                <label htmlFor="contact-name">
                  Full Name <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">
                  Email Address <span className="required-star">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="e.g. Table Reservation / Feedback"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">
                  Message <span className="required-star">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Write your message, dietary preferences, or question here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                <span>Send Message</span>
                <span className="submit-icon">🚀</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
