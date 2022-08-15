import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const DetailInfo = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
//   useEffect(() => {
//     fetch(
//       `https://makeup-api.herokuapp.com/api/v1/products.json?product_category=powder&product_id=${productId}`
//         .then((res) => res.json())
//         .then((data) => setProduct(data))
//     );
//   }, [productId]);
  return (
    <div>
      <h1>Details: {productId}</h1>
      <p>{product.length}</p>
    </div>
  );
};

export default DetailInfo;
