// ProductsList.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from './services/api'; // Path to your api.js

// ... rest of your component
const ProductsList = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const getProducts = async () => {
        try {
          const productsData = await fetchProducts();
          setProducts(productsData);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      getProducts();
    }, []);
  
    // Render your products
    return (
      <div>
        {products.map(product => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    );
  };
  