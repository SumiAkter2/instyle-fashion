import React from "react";

const Product = ({ p }) => {
  return (
    <div className="border-2 rounded-md text-start p-2 h-96">
      <img style={{ width: "200px" }} src={p.image_link} alt="" />
      <h1>{p.name}</h1>
      <h1>
        Brand: <span>{p.brand ? p.brand : "Null"}</span>
      </h1>

      <h1>price: ${p.price}</h1>
      <div className="flex justify-between ">
        <button className="btn">Order</button>
        <button className="btn">Details</button>
      </div>
    </div>
  );
};

export default Product;
