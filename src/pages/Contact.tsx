import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_iy8wv19",
        "template_d80xus1",
        form.current,
        "K30GUiObAJ5gdYW_c" // ✅ Public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error("Error:", error);
          setStatus("❌ Failed to send. Try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-info">
          <h2 className="contact-title">Get in Touch 💜</h2>
          <p className="contact-text">
            Have questions or want to collaborate?  
            We’d love to hear from you — let’s make an impact together.
          </p>

          <div className="info-items">
            <div className="info-item">
              <i className="fa fa-envelope"></i>
              <span>care@belofte.in</span>
            </div>
            <div className="info-item">
              <i className="fa fa-map-marker"></i>
              <span>Bangalore, India</span>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h3 className="form-title">Send us a message</h3>

          <div className="form-group">
            <label>Name</label>
            <input type="text" name="from_name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="reply_to" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input type="text" name="subject" placeholder="Subject" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" placeholder="Write your message..." required />
          </div>

          <button type="submit" className="submit-button">Send Message</button>

          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
