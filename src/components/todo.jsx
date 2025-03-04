import React from "react";

const todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="description">{todo.description}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button
          className="complete"
          onClick={() => completeTodo(todo.id)}
          style={{ backgroundColor: todo.isCompleted ? "#d9534f" : "" }}
        >
          Completar
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default todo;
