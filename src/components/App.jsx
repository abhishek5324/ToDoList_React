import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [item, setItem] = useState([]);

  function itemAdd() {
    setItem((prev) => {
      return [...prev, inputText];
    });
    setInputText("");
  }
  function itemInserted(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function toDelete(id) {
    setItem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={itemInserted} type="text" value={inputText} />
        <button onClick={itemAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoItems, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItems}
              onChecked={toDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
