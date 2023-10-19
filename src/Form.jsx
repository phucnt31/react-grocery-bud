import React, { useState } from "react";

const Form = () => {
  const [itemName, setItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
