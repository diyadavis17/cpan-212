import React, { useState } from 'react';
import '../styles/Kids.css'; 
import { FaShoppingCart } from 'react-icons/fa';

import new1 from '../images/kids/new1.avif';
import new2 from '../images/kids/new2.avif';
import new3 from '../images/kids/new3.avif';
import new4 from '../images/kids/new4.avif';
import new5 from '../images/kids/new5.avif';
import new6 from '../images/kids/new6.avif';

import girl1 from '../images/kids/girl1.avif';
import girl2 from '../images/kids/girl2.avif';
import girl3 from '../images/kids/girl3.avif';
import girl4 from '../images/kids/girl4.avif';
import girl5 from '../images/kids/girl5.avif';
import girl6 from '../images/kids/girl6.avif';

import boy1 from '../images/kids/boy1.avif';
import boy2 from '../images/kids/boy2.avif';
import boy3 from '../images/kids/boy3.avif';
import boy4 from '../images/kids/boy4.avif';
import boy5 from '../images/kids/boy5.avif';
import boy6 from '../images/kids/boy6.avif';

const Kids = () => {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert('Successfully added to the cart!');
  };

  const newborn = [
    { src: new1, price: "$20" },
    { src: new2, price: "$22" },
    { src: new3, price: "$18" },
    { src: new4, price: "$25" },
    { src: new5, price: "$23" },
    { src: new6, price: "$19" },
  ];

  const girls = [
    { src: girl1, price: "$30" },
    { src: girl2, price: "$32" },
    { src: girl3, price: "$28" },
    { src: girl4, price: "$35" },
    { src: girl5, price: "$33" },
    { src: girl6, price: "$31" },
  ];

  const boys = [
    { src: boy1, price: "$27" },
    { src: boy2, price: "$29" },
    { src: boy3, price: "$24" },
    { src: boy4, price: "$26" },
    { src: boy5, price: "$28" },
    { src: boy6, price: "$30" },
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
      {renderSection("Newborn", newborn)}
      {renderSection("Girls", girls)}
      {renderSection("Boys", boys)}
    </div>
  );
};

export default Kids;
