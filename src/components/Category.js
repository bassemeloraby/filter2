import React from "react";
import Cat from "../db/CategoryDb";
const Category = ({ handleChange }) => {
  return (
    <div>
      <h2>Category</h2>
      {Cat.map((c, i) => (
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

export default Category;
