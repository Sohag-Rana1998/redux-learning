import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="text-xl font-bold">TODOS</h2>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id} className="text-xl font-bold mt-2 border">
            {todo.text}
            <button
              className="btn btn-secondary ml-3"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
