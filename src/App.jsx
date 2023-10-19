import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";

const setLocalStorage = (item) =>
  localStorage.setItem("list", JSON.stringify(item));
const getLocalStorage = () => JSON.parse(localStorage.getItem("list")) || [];

const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };
    const addedItem = [...items, newItem];
    setItems(addedItem);
    setLocalStorage(addedItem);
  };
  const removeItem = (id) => {
    const newItem = items.filter((item) => item.id !== id);
    setItems(newItem);
    setLocalStorage(newItem);
  };
  const editItem = (id) => {
    const newItem = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItem);
    setLocalStorage(newItem);
  };

  return (
    <main className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </main>
  );
};

export default App;
