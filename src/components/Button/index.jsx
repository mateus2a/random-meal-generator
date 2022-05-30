import React from "react";

import "./style.css";

function Button() {
  return (
    <div className="header-generator">
      <h2 className="title-generator">Felling hungry?</h2>
      <h4 className="subtitle-generator">
        Get a random meal by clicking below
      </h4>
      <button type="submit">Get Meal</button>
    </div>
  );
}

export default Button;
