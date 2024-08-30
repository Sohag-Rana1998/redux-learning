import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));

    setInput("");
  };
  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input type="text" name="todo" id="" value={input} />
        <button>submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
