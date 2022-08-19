import React from "react";

const Info = ({ p }) => {
  return (
    <div>
      <p>{p.strCategory}</p>
      <p>{p.strArea}</p>
      <p>{p.strMeal}</p>

      <h1>{p.strInstructions}</h1>
      <img src={p.strMealThumb} alt="food" />
    </div>
  );
};

export default Info;
