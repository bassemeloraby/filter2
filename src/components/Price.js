import React from "react";
import Pr from "../db/PriceDb";

const Price = ({handleChange}) => {
  return (
    <div>
      <h2 className="">Price</h2>
      <div className="row">
      {Pr.map((c, i) => (
        <label className="" key={i}>
          <input type="radio" onChange={handleChange} value={c.value} name="test2" />
          <span className=""></span>{c.title}
        </label>
      ))}
      </div>
    </div>
  );
};

export default Price;
