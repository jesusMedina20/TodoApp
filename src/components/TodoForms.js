import React, { useState } from "react";
import "./todoForms.css";
function TodoForms({ addTodo }) {
  const [userInput, setUserInput] = useState("");
  const handlerOnChange = (e) => {
    // console.log(e)
    setUserInput(e.currentTarget.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      addTodo(userInput);
      setUserInput("");
    }
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          className="input"
          type="text"
          value={userInput}
          placeholder="Ingresar tarea"
          onChange={handlerOnChange}
        />
        <button className="agg">add todo</button>
      </form>
    </div>
  );
}
export default TodoForms;
