import React from "react";
import Todo from "../models/todo";
import { useTodoCtx } from "../store/todo-context";

type propType = { item: Todo; onRemoveTodo: (id: number) => void };

const TodoItem = (props: propType) => {
  const { removeTodo } = useTodoCtx();
  const clickHandler = () => {
    removeTodo(props.item.id);
  };
  return (
    <>
      <li className="todo-item" key={props.item.id}>
        {props.item.text}
        <button onClick={clickHandler} className="remove">
          x
        </button>
      </li>
    </>
  );
};
export default TodoItem;
