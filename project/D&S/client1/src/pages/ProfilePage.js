import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) setUser(loggedInUser);
  }, []);

  if (!user)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h2 className="text-muted">Please log in first</h2>
      </div>
    );

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 text-center" style={{ width: "24rem" }}>
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-circle mx-auto border border-secondary p-1"
          width="100"
          height="100"
        />
        <h2 className="mt-3">{user.name || "User"}</h2>
        <p className="text-muted"><strong>Email:</strong> {user.email}</p>
        <p className="text-muted"><strong>Date of Birth:</strong> {user.dob}</p>
        <button
          onClick={() => {
            localStorage.removeItem("loggedInUser");
            window.location.reload();
          }}
          className="btn btn-danger mt-3"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
