// ProductList.jsx
import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import useFetchProducts from "./useFetchProducts";
import { useSelector } from 'react-redux';

export default function ProductList() {
  const { products, loading, error } = useFetchProducts();
  const searchQuery = useSelector(state => state.search.query.toLowerCase());

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery)
  );

  if (loading) return <div className="p-4">Loading products...</div>;
  if (error) return <div className="p-4 text-red-600">Error fetching products.</div>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filteredProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
