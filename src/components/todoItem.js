import React from "react";
import "./todoItem.css";

function TodoItem({ todo, onCompleted, onDeleteItem }) {
  const getStyle = () => {
    return {
      textDecoration: todo.completed ? `line-through` : `none`,
    };
  };
  return (
    <div className="todoTask">
      <input
        type={`checkbox`}
        checked={todo.completed}
        onChange={() => onCompleted(todo.id)}
      />
      <a className="task" style={getStyle()}>
        {todo.task}
      </a>
      <button className="add-btn" onClick={() => onDeleteItem(todo.id)}>
        {" "}
        X{" "}
      </button>
    </div>
  );
}
export default TodoItem;
