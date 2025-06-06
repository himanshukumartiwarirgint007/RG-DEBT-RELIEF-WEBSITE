import React, { useState } from "react";

const Apply = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setSubmitted(true);
  };

  return (
    <div className="apply-page">
      <h1>Apply for Debt Relief</h1>
      <p>
        Fill out the form below and our team will contact you to discuss your options.
      </p>
      {submitted ? (
        <div className="success-message">
          <h2>Thank you for applying!</h2>
          <p>We have received your information and will be in touch soon.</p>
        </div>
      ) : (
        <form className="apply-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
            />
          </div>
          <button type="submit">Apply Now</button>
        </form>
      )}
    </div>
  );
};

export default Apply;