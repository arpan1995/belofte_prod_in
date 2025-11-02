import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Donate.css";
import qr from "../assets/qr.png"; // QR image in assets folder

const Donate: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string>("");

  const sendDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_iy8wv19", // ✅ your service ID
        "template_vw6j32z", // ✅ your new donation template ID
        form.current,
        "K30GUiObAJ5gdYW_c" // ✅ your public key
      )
      .then(
        () => {
          setStatus("✅ Donation details sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error("Error:", error);
          setStatus("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <section className="donate-section">
      <div className="donate-container">
        <h2>Support Belofte Foundation</h2>
        <p>
          Your contribution helps us empower more lives through education,
          skills, and community growth.
        </p>

        <div className="donate-details">
          <div className="bank-info">
            <h3>Bank Details</h3>
            <p><strong>Bank Name:</strong> HDFC Bank</p>
            <p><strong>Account Name:</strong> Belofte Foundation</p>
            <p><strong>Account Number:</strong> 1234567890</p>
            <p><strong>IFSC:</strong> HDFC0001234</p>
          </div>

          <div className="qr-section">
            <h3>Scan & Pay</h3>
            <img src={qr} alt="QR Code" className="qr-image" />
          </div>
        </div>

        <form ref={form} onSubmit={sendDonation} className="donor-form">
          <h3>Donor Details</h3>
          <input type="text" name="donor_name" placeholder="Full Name" required />
          <input type="email" name="donor_email" placeholder="Email Address" required />
          <input type="text" name="donor_phone" placeholder="Phone Number" required />
          <textarea name="donor_message" placeholder="Donation Amount and Transaction details for certification"></textarea>
          <button type="submit">Submit</button>
          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Donate;
