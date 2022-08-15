import React from "react";
import { useNavigate } from "react-router-dom";
const Product = ({ p, addToCart }) => {
  const navigate = useNavigate();
  const detailInfo = () => {
    navigate("/shop/" + p.id);
    console.log("li");
  };
  return (
    <div className="border-2 hover:shadow-2xl hover:bg-black/25 rounded-md text-start p-4 shop-container">
      <div>
        <button
          onClick={detailInfo}
          className="btn btn-ghost detail-btn hidden"
        >
          Detail
        </button>
      </div>
      <img
        className="border-0 rounded-lg "
        style={{ width: "150px", paddingLeft: "20px" }}
        src={p.image_link}
        alt="product-img"
      />
      <h1>{p.name}</h1>
      <h1>
        Brand: <span>{p.brand ? p.brand : "Null"}</span>
      </h1>

      <h1>
        Price: <span className="font-bold">${p.price}</span>{" "}
      </h1>
      <div class="rating rating-xs">
        <input
          type="radio"
          name="rating-5"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          class="mask mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-5"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          class="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          class="mask mask-star-2 bg-orange-400"
        />
      </div>
      <br />
      <button
        onClick={addToCart}
        class="btn my-2 w-full btn-info text-cyan-500 btn-outline"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
