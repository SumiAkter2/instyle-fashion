import React from "react";
import { Link } from "react-router-dom";

const Info = ({ p, productId }) => {
  return (
    <div>
      <div className="hero min-h-screen bg-gray-200 p-12">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={p.strMealThumb}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="food"
          />
          <div className="text-start pl-6">
            <h1 className="text-3xl font-bold">{p.strMeal}</h1>
            <h1 className="text-xl font-bold">Id: {productId}</h1>
            <p>
              <span className="font-bold"> Category :</span>
              {p.strCategory}, {p.strArea} .
            </p>
            <p>
              <span className="font-bold"> Ingredients :</span>{" "}
              {p.strIngredient1},{p.strIngredient2},{p.strIngredient3}
              {p.strIngredient4},{p.strIngredient5},{p.strIngredient6},
              {p.strIngredient7},{p.strIngredient8},{p.strIngredient9},
              {p.strIngredient10},{p.strIngredient11},{p.strIngredient12},
              {p.strIngredient13},{p.strIngredient14}.
            </p>
            <div
              class="tooltip tooltip-bottom tooltip-info"
              data-tip={p.strInstructions}
            >
              <p class="py-6 text-left">
                <span className="font-bold"> Instructions :</span>
                {p.strInstructions.slice(0, 400)}...
              </p>
            </div>
            <button className="btn btn-info text-cyan-500 btn-outline font-bold  text-left">
              <a href={p.strYoutube}>Video</a>
            </button>

            <button className="ml-5 btn btn-info text-cyan-500 btn-outline font-bold  text-left">
              <a href={p.strSource}>Source</a>
            </button>
            <button className="btn ml-5   btn-info text-cyan-500 btn-outline">
              <Link to="/shop">Back To Shop</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
