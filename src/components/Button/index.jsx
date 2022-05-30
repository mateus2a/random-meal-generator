import React from "react";

import "./style.css";

function Button() {
  const getRandomMeal = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((res) =>
      res.json().then((data) => {
        console.log(data);
      })
    );
  };
  return (
    <div className="header-generator">
      <h2 className="title-generator">Felling hungry?</h2>
      <h4 className="subtitle-generator">
        Get a random meal by clicking below
      </h4>
      <button type="submit" onClick={getRandomMeal}>
        Get Meal
      </button>
    </div>
  );
}

export default Button;
