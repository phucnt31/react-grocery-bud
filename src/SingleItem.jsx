import React, { useState } from "react";

const SingleItem = ({ id, completed, name, removeItem }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="single-item">
      <input
        type="checkbox"
        value={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isChecked && "line-through",
        }}
      >
        {name}
      </p>
      <button
        type="button"
        className="remove-btn btn"
        onClick={() => removeItem(id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
