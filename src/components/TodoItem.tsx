import React, { useState } from "react";
import Todo from "../models/todo";
import { useTodoCtx } from "../store/todo-context";

type propType = {
  item: Todo;
  key: number;
  onRemoveTodo: (id: number) => void;
};

const TodoItem = (props: propType) => {
  const { removeTodo, setCompletedItems, completedItems } = useTodoCtx();
  const [checked, setChecked] = useState(false);

  const removeHandler = () => {
    removeTodo(props.key);
  };
  const checkedHandler = () => {
    setChecked((prevCheck) => !prevCheck);
    props.item.checked = !props.item.checked;
    if (props.item.checked === true) setCompletedItems(props.item);
  };

  return (
    <>
      <li className="todo-item" key={props.item.id}>
        <label className="label-container">
          {props.item.text}
          <input
            type="checkbox"
            checked={checked}
            key={props.item.id}
            onChange={checkedHandler}
          />
          <span className="checkmark"></span>
        </label>
        <button onClick={removeHandler} className="remove">
          x
        </button>
      </li>
    </>
  );
};
export default TodoItem;
