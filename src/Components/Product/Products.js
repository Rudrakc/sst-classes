// Component
import ProductCard from "../ProductCard/ProductCard.js";
import { useState, useEffect } from "react";
import React from "react";
function Products() {
  let [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        setProduct(res);
      });
  }, []);
  return (
    <div className="w-full flex flex-wrap gap-8 justify-center my-24">
      {products.map(function (item) {
        return <ProductCard key={item.id} product={item} />;
      })}
    </div>
  );
}

export default React.memo(Products);
