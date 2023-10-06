import React from "react";
import Co from "../db/ColorsDb";

const Colors = ({ handleChange }) => {
  return (
    <div>
    <h2 className="">Colors</h2>
      <div className="d-flex flex-column">
        {Co.map((c, i) => (
          <label
            className="me-2"
            style={{ backgroundColor: `${c.value}`, 
            // width: "auto"
           }}
           key={i}
          >
            <input
            className="ms-2"
              type="radio"
              onChange={handleChange}
              value={c.value}
              name="test1"
            />
            <span className=""></span>
           
          </label>
        ))}
      </div>
    </div>
  );
};

export default Colors;
