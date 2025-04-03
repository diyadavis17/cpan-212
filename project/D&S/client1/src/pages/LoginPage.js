import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/LoginPage.css";
import loginImage from "../images/login_image.avif";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    setSuccessMessage("Account successfully created! Redirecting...");
    setTimeout(() => {
      navigate("/profile");
    }, 2000);
  };

  const handleBecomeMember = () => {
    navigate("/register"); 
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>D&S MEMBERS EXPERIENCE MORE</h2>
        <p>
          As a D&S Member, experience exclusive benefits, discounts, and more.
          Our complimentary loyalty program offers you the ability to seamlessly
          earn points while enjoying unparalleled perks and promotions.
        </p>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
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
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Sign In
          </button>
        </form>
        <button className="btn btn-secondary mt-3" onClick={handleBecomeMember}>
          Become a New Member
        </button>
      </div>
      <div className="login-image">
        <img src={loginImage} alt="Login" className="img-fluid" />
      </div>
    </div>
  );
}

export default LoginPage;
