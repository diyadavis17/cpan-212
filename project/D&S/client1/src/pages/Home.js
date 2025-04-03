import React, { useState } from 'react';
import '../styles/Home.css';
import { FaShoppingCart } from 'react-icons/fa'; 

import decor1 from '../images/Home/decor1.avif';
import decor2 from '../images/Home/decor2.avif';
import decor3 from '../images/Home/decor3.avif';
import decor4 from '../images/Home/decor4.avif';
import decor5 from '../images/Home/decor5.avif';
import decor6 from '../images/Home/decor6.avif';

import bed1 from '../images/Home/bed1.avif';
import bed2 from '../images/Home/bed2.avif';
import bed3 from '../images/Home/bed3.avif';
import bed4 from '../images/Home/bed4.avif';
import bed5 from '../images/Home/bed5.avif';

import cook1 from '../images/Home/cook1.avif';
import cook2 from '../images/Home/cook2.avif';
import cook3 from '../images/Home/cook3.avif';
import cook4 from '../images/Home/cook4.avif';
import cook5 from '../images/Home/cook5.avif';
import cook6 from '../images/Home/cook6.avif';

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert('Successfully added to the cart!');
  };

  const homeDecor = [
    { src: decor1, price: "$40" },
    { src: decor2, price: "$45" },
    { src: decor3, price: "$50" },
    { src: decor4, price: "$35" },
    { src: decor5, price: "$55" },
    { src: decor6, price: "$60" },
  ];

  const beddingBlankets = [
    { src: bed1, price: "$30" },
    { src: bed2, price: "$32" },
    { src: bed3, price: "$28" },
    { src: bed4, price: "$33" },
    { src: bed5, price: "$35" },
  ];

  const cookingDining = [
    { src: cook1, price: "$60" },
    { src: cook2, price: "$65" },
    { src: cook3, price: "$55" },
    { src: cook4, price: "$50" },
    { src: cook5, price: "$70" },
    { src: cook6, price: "$75" },
  ];

  const renderSection = (title, items) => (
    <div className="container mt-4">
      <h2 className="text-center">{title}</h2>
      <div className="row">
        {items.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.src} className="card-img-top img-fluid" alt="Product" />
              <div className="card-body text-center">
                <p className="card-text">{item.price}</p>
                <button className="btn btn-add-to-cart" onClick={() => addToCart(item)}>
                                  <FaShoppingCart /> Add to Cart
                                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {renderSection("Home Decor", homeDecor)}
      {renderSection("Bedding & Blankets", beddingBlankets)}
      {renderSection("Cooking & Dining", cookingDining)}
    </div>
  );
};

export default Home;
