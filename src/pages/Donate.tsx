import React from "react";
import "./Donate.css";
import qr from "../assets/qr.png"; // place your QR image in assets folder

const Donate: React.FC = () => {
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

        <form className="donor-form">
          <h3>Donor Details</h3>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Phone Number" required />
          <textarea placeholder="Message or Purpose (optional)"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Donate;
