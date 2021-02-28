import React, { useState } from "react";

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
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={itemInserted} type="text" />
        <button onClick={itemAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
