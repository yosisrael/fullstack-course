import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setItem(event.target.value);
  }

  function addItem() {
    setItems((prevItems) => [...prevItems, item]);
    setItem("");
  }

  function handleDelete(id) {
    // console.log(id);
    setItems((prevItems) => prevItems.filter((item, index) => index !== id));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
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
