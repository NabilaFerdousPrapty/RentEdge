import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("/products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  return (
    <div>
      <Hero />
      <h1 className="text-3xl font-semibold text-center my-10">Our Products</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {product.map((product, index) => (
          <SingleProduct key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
