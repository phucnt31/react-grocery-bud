import React, { useState } from "react";

const SingleItem = ({ id, completed, name, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: completed && "line-through",
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
