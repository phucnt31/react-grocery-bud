import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };
    setItems([...items, newItem]);
  };

  return (
    <main className="section-center">
      <Form addItem={addItem} />
    </main>
  );
};

export default App;
