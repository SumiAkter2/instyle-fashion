import React from "react";
import { useNavigate } from "react-router-dom";
const Product = ({ p, addToCart }) => {
  const navigate = useNavigate();
  const detailInfo = () => {
    navigate(`/shops/${p.idMeal}`);
  };
  return (
    <div className="border-2 hover:shadow-2xl hover:bg-slate-200 rounded-md text-start p-4 shop-container">
      <div>
        <div className="flex justify-end">
          <div class="tooltip tooltip-left tooltip-info" data-tip="Details">
            <button
              onClick={detailInfo}
              className="btn btn-info btn-circle  text-cyan-500 btn-outline "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="30px"
                className="fill-yellow-600"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <img
        className="border-0 rounded-lg "
        style={{ width: "150px", paddingLeft: "20px" }}
        src={p.strMealThumb}
        alt="product-img"
      />
      <h1 className="text-xl">{p.strMeal}</h1>
      <h1>{p.strCategory}</h1>

      <div className="rating rating-xs">
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
      <br />
      <button
        onClick={addToCart}
        className="btn my-2 w-full btn-info text-cyan-500 btn-outline"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
