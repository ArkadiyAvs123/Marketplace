import axios from 'axios';



const API_URL = 'http://localhost:5000/api';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    // Handle the error appropriately
    console.error("An error occurred while fetching products:", error);
    throw error;
  }
};

// You can define more functions to interact with other endpoints similarly.
