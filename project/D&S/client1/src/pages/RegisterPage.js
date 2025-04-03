import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/RegisterPage.css"; 

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !dob || !termsAccepted) {
      alert("Please fill in all fields and accept the terms.");
      return;
    }

    setSuccessMessage("Account successfully created! Redirecting...");
    setTimeout(() => {
      navigate("/profile");
    }, 2000);
  };

  return (
    <div className="register-container">
      <h1>Become a D&S Member</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Create a password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="8"
            maxLength="25"
          />
          <small>Password must be 8-25 characters, include at least 1 number, 1 uppercase letter, 1 lowercase letter, and no spaces.</small>
        </div>

        <div className="mb-3">
          <label className="form-label">Date of birth:</label>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="YYYY"
              value={dob.split("/")[0]}
              onChange={(e) => setDob(e.target.value + "/" + dob.split("/")[1])}
              maxLength="4"
            />
            /
            <input
              type="text"
              className="form-control"
              placeholder="MM"
              value={dob.split("/")[1]}
              onChange={(e) => setDob(dob.split("/")[0] + "/" + e.target.value)}
              maxLength="2"
            />
            /
            <input
              type="text"
              className="form-control"
              placeholder="DD"
              value={dob.split("/")[2]}
              onChange={(e) => setDob(dob.split("/")[0] + "/" + dob.split("/")[1] + "/" + e.target.value)}
              maxLength="2"
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
            />
            I would like to receive personalized promotions from D&S, a brand of the D&S Group, via email and text messages. I can withdraw this consent at any time. I confirm that I'm 16 years old or older.
          </label>
        </div>

        <div className="mb-3">
          <p>We will process your personal data in accordance with D&S’s Privacy Notice.</p>
        </div>

        <div className="mb-3">
          <p>By continuing, you agree to the D&S Membership Terms & Conditions.</p>
        </div>

        <button type="submit" className="btn btn-success">
          Register
        </button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
}

export default RegisterPage;
