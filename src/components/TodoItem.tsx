import React, { useState, useCallback } from "react";
import { useTodoCtx } from "../store/todo-context";
import Todo from "../models/todo";

import "../styles/components/_toDoItem.scss";
type propType = {
  item: Todo;
  onRemoveTodo: (id: number) => void;
};

const TodoItem = React.memo((props: propType) => {
  const { removeTodo } = useTodoCtx();
  const [checked, setChecked] = useState(false);

  // const [checkedItem, setCheckedItem] = useState(props.item);
  const checkedHandler = useCallback(() => {
    setChecked((prevChecked) => !prevChecked);

    // setCheckedItem((prevCheckedItem) => ({
    //   ...prevCheckedItem,
    //   checked: !prevCheckedItem.checked,
    // }));

    props.item.checked = !props.item.checked;
    //eslint-disable-next-line
  }, []);

  const removeHandler = (e) => {
    removeTodo(props.item.id);
  };

  const itemTextClass = props.item.checked === true ? "selected" : "";
  const inputClass = props.item.checked === true ? "checked" : "";
  return (
    <>
      <li className="todo-item" key={props.item.id}>
        <label className="label-container">
          <p className={itemTextClass}>{props.item.text}</p>
          <input
            className={inputClass}
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
});
export default TodoItem;
