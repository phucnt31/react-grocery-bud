import React, { useState } from "react";

const SingleItem = ({ completed, name }) => {
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
    </div>
  );
};

export default SingleItem;
