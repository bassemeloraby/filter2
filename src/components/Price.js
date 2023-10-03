import React from "react";
import Pr from "../db/PriceDb";

const Price = ({handleChange}) => {
  return (
    <div>
      <h2 className="">Price</h2>
      {Pr.map((c, i) => (
        <div class="form-check" key={i}>
          <input
            class="form-check-input"
            type="radio"
            name={c.value}
            id={c.value}
            onChange={handleChange}
            value={c.value}
          />
          <label class="form-check-label" for={c.value}>
            {c.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Price;
