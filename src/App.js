import { useEffect, useState } from "react";
import "./App.css";
import TodoForms from "./components/TodoForms";
import TodoList from "./components/todoList";

function App() {
  const [todos, setTodos] = useState([]);
  const onCompleted = (id) => {
    const updatedTodos = todos?.map((todo) => {
      return todo.id === Number(id)
        ? { ...todo, completed: !todo.completed }
        : { ...todo };
    });
    setTodos(updatedTodos);
    localStorage.setItem("todosAll", JSON.stringify(updatedTodos));
  };
  const onDeleteItem = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    localStorage.setItem("todosAll", JSON.stringify(updatedTodos));
  };
  const addTodo = (newTodo) => {
    let newItem = { id: +new Date(), task: newTodo, completed: false };
    setTodos([...todos, newItem]);
    localStorage.setItem("todosAll", JSON.stringify([...todos, newItem]));
  };
  const getTodos = () => {
    return localStorage.getItem("todosAll");
  };
  useEffect(() => {
    setTodos(JSON.parse(getTodos()));
  }, []);
  return (
    <div className="container">
      <TodoForms addTodo={addTodo} />
      <TodoList
        todos={todos}
        onCompleted={onCompleted}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
}

export default App;
