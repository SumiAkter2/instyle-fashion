import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import SearchInput from "../SearchInput/SearchInput";

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
  // console.log(products);

  return (
    <div>
      <SearchInput products={products}></SearchInput>
      <div className="grid lg:grid-cols-4  gap-4 p-8 ">
        {products.map((p) => (
          <Product key={products.id} p={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
