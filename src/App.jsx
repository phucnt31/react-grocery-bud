import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";

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
  const removeItem = (id) => {
    const newItem = items.filter((item) => item.id !== id);
    setItems(newItem);
  };

  return (
    <main className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </main>
  );
};

export default App;
