import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details using the product ID
    const fetchProduct = async () => {
      // Example of product data fetching
      setProduct({ id, name: "T-Shirt", description: "Comfortable cotton t-shirt", price: 20 });
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="container">
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button className="btn btn-success">Add to Cart</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
