import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json?product_category=powder&product_type=blush"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(3, 41));
      });
  }, []);
  console.log(products);
  return (
    <div>
      <h1>Shop :{products.length} </h1>

      <div className="grid grid-cols-5 gap-2 p-4">
        {products.map((p) => (
          <Product key={products.id} p={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
