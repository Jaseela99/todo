import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleComplete }) {
  return (
    <ul>
      {todos.map((todo,index) => (
        <Todo
          key={index}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
