import React, { useState } from 'react';
import '../styles/Mens.css'; 
import { FaShoppingCart } from 'react-icons/fa'; 

import shirt1 from '../images/mens/shirt1.avif';
import shirt2 from '../images/mens/shirt2.avif';
import shirt3 from '../images/mens/shirt3.avif';
import shirt4 from '../images/mens/shirt4.avif';
import shirt5 from '../images/mens/shirt5.avif';
import shirt6 from '../images/mens/shirt6.avif';

import pant1 from '../images/mens/pant1.avif';
import pant2 from '../images/mens/pant2.avif';
import pant3 from '../images/mens/pant3.avif';
import pant4 from '../images/mens/pant4.avif';
import pant5 from '../images/mens/pant5.avif';
import pant6 from '../images/mens/pant6.avif';

import swet1 from '../images/mens/swet1.avif';
import swet2 from '../images/mens/swet2.avif';
import swet3 from '../images/mens/swet3.avif';
import swet4 from '../images/mens/swet4.avif';

const Mens = () => {
  const [cart, setCart] = useState([]); 


  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert('Item added to the cart!'); 
  };

  const shirts = [
    { src: shirt1, price: "$30" },
    { src: shirt2, price: "$32" },
    { src: shirt3, price: "$28" },
    { src: shirt4, price: "$35" },
    { src: shirt5, price: "$29" },
    { src: shirt6, price: "$33" },
  ];

  const bottoms = [
    { src: pant1, price: "$40" },
    { src: pant2, price: "$42" },
    { src: pant3, price: "$38" },
    { src: pant4, price: "$45" },
    { src: pant5, price: "$37" },
    { src: pant6, price: "$41" },
  ];

  const sweatshirts = [
    { src: swet1, price: "$50" },
    { src: swet2, price: "$55" },
    { src: swet3, price: "$52" },
    { src: swet4, price: "$58" },
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

      {renderSection("Shirts", shirts)}
      {renderSection("Bottoms", bottoms)}
      {renderSection("Sweatshirts", sweatshirts)}
    </div>
  );
};

export default Mens;
