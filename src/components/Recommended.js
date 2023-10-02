import React from "react";
import Button from "react-bootstrap/Button";
import Rec from "../db/RecommendedDb";
const Recommended = ({ handleClick }) => {
  return (
    <div>
      <h2 className="">Recommended</h2>
      
      {Rec.map((r, i) => (
        <Button variant="primary" onClick={handleClick} value={r.value} key={i} className="me-2">
          {r.text}
        </Button>
      ))}
    </div>
  );
};

export default Recommended;
