import React, { useState } from "react";
import { useSelector } from "react-redux";
import Store from "../Redux/Store";
import "../App.css";

const selectTodos = (state) => state.todos;

const Todo = () => {
  const [currentTodo, setCurrentTodo] = useState("");

  const todos = useSelector(selectTodos);

  const handleInput = (e) => {
    e.preventDefault();
    setCurrentTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      content: currentTodo,
      completed: false,
    };
    Store.dispatch({ type: "todo/addTodo", payload: newTodo });
    // console.log(Store.getState());
  };

  const handleDelete = (todo) => {
    Store.dispatch({ type: "todo/delTodo", payload: todo });
  };

  return (
    <div>
      <h1>Redux Todo List</h1>
      <div>
        <label>Enter Todo:</label>
        <input type="text" name="todo" onChange={handleInput} />
        <button onClick={onSubmit}>Add Todo</button>
      </div>
      <div>
        <h2>Current Todos:</h2>
        <div>
          {todos.map((todo, idx) => {
            return (
              <div key={todo}>
                <span>{todo}</span>
                <button
                  onClick={() => {
                    handleDelete(todo);
                  }}
                >
                  Complete
                </button>
                <button
                  onClick={() => {
                    handleDelete(todo);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
