import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from a mock API or server here
    const fetchProducts = async () => {
      // You can fetch data here (e.g., from your backend)
      setProducts([
        { id: 1, name: "T-Shirt", description: "Comfortable cotton t-shirt" },
        { id: 2, name: "Jeans", description: "Denim jeans for everyday wear" }
      ]);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1>Welcome to D&S Clothing Store</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
