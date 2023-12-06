import { useQuery } from 'react-query';

const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

const UseProductData = () => {
  return useQuery('products', fetchProducts);
};

export default UseProductData;