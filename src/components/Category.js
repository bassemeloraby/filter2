import React from "react";
import Cat from "../db/CategoryDb";
const Category = ({ handleChange }) => {
  return (
    <div>
      <h2>Category</h2>
      <div className="row">
      {Cat.map((c, i) => (
       
        <label className="" key={i}>
        <input type="radio" onChange={handleChange} value={c.value} name="test" />
        <span className=""></span>{c.title}
      </label>
        
        
      ))}
      </div>
    </div>
  );
};

export default Category;
