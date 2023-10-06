import React from "react";
import Pr from "../db/PriceDb";

const Price = ({handleChange}) => {
  return (
    <div>
      <h2 className="">Price</h2>
      {Pr.map((c, i) => (
        <div className="form-check" key={i}>
          <input
            className="form-check-input"
            type="radio"
            name={c.value}
            id={c.value}
            onChange={handleChange}
            value={c.value}
          />
          <label className="form-check-label" for={c.value}>
            {c.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Price;
