// File: src/components/ProductDetail.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchProduct();
  }, [id]);

  if (error) return <p className="text-red-600">Error: {error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} className="w-full h-80 object-cover rounded mb-4" />
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-xl font-semibold text-green-700">${product.price}</p>
      <p className="text-sm text-gray-500 mt-2">Brand: {product.brand}</p>
      <p className="text-sm text-gray-500">Category: {product.category}</p>
    </div>
  );
}
