import React from "react";
import TodoItem from "./todoItem";

function TodoList({ todos, onCompleted, onDeleteItem }) {
  return (
    <div>
      {todos?.map((todo, index) => (
        <TodoItem
          key={`todo-${index}`}
          todo={todo}
          onCompleted={onCompleted}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
}
export default TodoList;
