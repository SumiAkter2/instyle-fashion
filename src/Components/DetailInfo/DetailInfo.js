import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "./Info";

const DetailInfo = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.meals));
  }, []);
  console.log(product);
  return (
    <div>
      <h1>helo</h1>
      <h1>Details: {productId}</h1>

      {product.map((p) => (
        <Info key={p.idMeal} p={p}></Info>
      ))}
    </div>
  );
};

export default DetailInfo;
