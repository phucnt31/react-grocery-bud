import { useState } from "react";
import Form from "./Form";

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <main>
      <Form />
    </main>
  );
};

export default App;
