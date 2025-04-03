import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import Womens from "./pages/Womens";  // Correct import for Womens
import Mens from "./pages/Mens";      // Correct import for Mens
import Kids from "./pages/Kids";      // Correct import for Kids
import Home from "./pages/Home";      // Correct import for Home

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/womens" element={<Womens />} /> {/* Route for Womens */}
          <Route path="/mens" element={<Mens />} />       {/* Route for Mens */}
          <Route path="/kids" element={<Kids />} />       {/* Route for Kids */}
          <Route path="/home" element={<Home />} />       {/* Route for Home */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
