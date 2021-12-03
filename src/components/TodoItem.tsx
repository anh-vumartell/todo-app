import React, { memo, useState, useCallback } from "react";
import Todo from "../models/todo";
import { useTodoCtx } from "../store/todo-context";

type propType = {
  item: Todo;
  onRemoveTodo: (id: number) => void;
};

const TodoItem = (props: propType) => {
  const { removeTodo } = useTodoCtx();
  const [checked, setChecked] = useState(false);

  const checkedHandler = useCallback(() => {
    setChecked((prevCheck) => !prevCheck);
    props.item.checked = !props.item.checked;
    // if (props.item.checked === true) setCompletedItems(props.item);
  }, [props.item]);

  const removeHandler = () => {
    removeTodo(props.item.id);
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
export default memo(TodoItem);
