import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputErea from "./InputErea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDelete(id) {
    setItems((prevItems) => prevItems.filter((item, index) => index !== id));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputErea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              text={todoItem}
              onClick={handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
