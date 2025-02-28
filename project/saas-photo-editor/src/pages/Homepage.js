import React from 'react';

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-veryDarkBlue text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to SaaS Photo Editor</h1>
      <p className="text-lg max-w-2xl text-center mb-6">
        Edit and enhance your photos with ease using our powerful SaaS Photo Editor. 
        Whether you're a professional photographer or just looking to touch up your photos, 
        our tool offers a wide range of features designed to help you create stunning images in no time.
      </p>
      <p className="text-lg text-center">
        Start editing now and bring your images to life!
      </p>
    </div>
  );
};

export default Homepage;
