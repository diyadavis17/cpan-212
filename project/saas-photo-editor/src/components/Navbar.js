import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-darkBlue text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-start items-center">
        <h1 className="text-2xl font-bold ml-4">SaaS Photo Editor</h1>
        <div className="ml-auto space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/login" className="hover:text-gray-400">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
