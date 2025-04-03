import React, { useState } from 'react';
import '../styles/Womens.css';
import { FaShoppingCart } from 'react-icons/fa'; 

import top1 from '../images/womens/top1.avif';
import top2 from '../images/womens/top2.avif';
import top3 from '../images/womens/top3.avif';
import top4 from '../images/womens/top4.avif';
import top5 from '../images/womens/top5.avif';
import top6 from '../images/womens/top6.avif';
import bottom1 from '../images/womens/bottom.avif';
import bottom2 from '../images/womens/bottom2.avif';
import bottom3 from '../images/womens/bottom3.avif';
import bottom4 from '../images/womens/bottom5.avif';
import bottom5 from '../images/womens/bottom6.avif';
import bottom6 from '../images/womens/bottom7.avif';
import dress1 from '../images/womens/dress.avif';
import dress2 from '../images/womens/dress2.avif';
import dress3 from '../images/womens/dress3.avif';
import dress4 from '../images/womens/dress4.avif';
import dress5 from '../images/womens/dress5.avif';
import dress6 from '../images/womens/dress6.avif';

const Womens = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert('Successfully added to the cart!');
  };

  const tops = [
    { src: top1, price: "$25" },
    { src: top2, price: "$30" },
    { src: top3, price: "$20" },
    { src: top4, price: "$28" },
    { src: top5, price: "$22" },
    { src: top6, price: "$27" },
  ];

  const bottoms = [
    { src: bottom1, price: "$35" },
    { src: bottom2, price: "$40" },
    { src: bottom3, price: "$38" },
    { src: bottom4, price: "$42" },
    { src: bottom5, price: "$36" },
    { src: bottom6, price: "$39" },
  ];

  const dresses = [
    { src: dress1, price: "$50" },
    { src: dress2, price: "$55" },
    { src: dress3, price: "$52" },
    { src: dress4, price: "$58" },
    { src: dress5, price: "$60" },
    { src: dress6, price: "$57" },
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
      {renderSection("Tops", tops)}
      {renderSection("Bottoms", bottoms)}
      {renderSection("Dresses", dresses)}
    </div>
  );
};

export default Womens;
