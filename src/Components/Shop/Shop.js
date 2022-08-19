import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Product from "../Product/Product";
import SearchInput from "../SearchInput/SearchInput";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.meals);
        setProducts(data.meals);
      });
  }, [products]);

  const addToCart = (products) => {
    const newProduct = [...cart, products];
    setCart(newProduct);
  };
  return (
    <div>
      <Header cart={cart}></Header>
      <div className="grid lg:grid-cols-4  gap-4 p-8 ">
        {products.map((p) => (
          <Product key={products.idMeal} addToCart={addToCart} p={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
