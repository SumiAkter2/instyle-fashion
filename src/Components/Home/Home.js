import React, { useEffect, useState } from "react";
import Categories from "../Categories/Categories";

const Home = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => res.json())
      .then((data) => setCategory(data.categories));
  }, []);
  // console.log(category.categories);
  return (
    <div>
      <div className="grid lg:grid-cols-4  gap-4 p-8 ">
        {category.map((c) => (
          <Categories key={category.idCategory} c={c}></Categories>
        ))}
      </div>
    </div>
  );
};

export default Home;
