import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="row">
          {cart.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img src={item.src} className="card-img-top img-fluid" alt="Product" />
                <div className="card-body text-center">
                  <p className="card-text">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
