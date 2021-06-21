import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { ITodos } from "../../interfaces/interfaces";

const Todos: React.FC<ITodos> = ({
  todos,
  markComplete,
  deleteTodo,
  updateTodoTitle,
}) => {
  return (
    <div>
      {todos.length === 0 && (
        <p style={{ padding: "10px", fontSize: "15px" }}>No todos found!!</p>
      )}

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={markComplete}
          deleteTodo={deleteTodo}
          updateTodoTitle={updateTodoTitle}
        />
      ))}
    </div>
  );
};

export default Todos;
