import { useEffect, useState, useCallback } from "react";
import TodoItem from "../components/TodoItem";
import { useTodoCtx } from "../store/todo-context";
import Todo from "../models/todo";
const Todos = () => {
  const { removeTodo, items } = useTodoCtx();

  const [displayedList, setDisplayedList] = useState<Todo[]>(items);

  let content = items.map((item) => (
    <TodoItem key={item.id} onRemoveTodo={removeTodo} item={item} />
  ));

  //FUNCTION SHOWING ALL ITEMS
  const displayAllHandler = useCallback(() => {
    setDisplayedList(items);
  }, [items]);
  //FUNCTION SHOWING ONLY COMPLETED ITEMS
  const displayCompletedHandler = useCallback(() => {
    const completedItems = items.filter((todo) => todo.checked === true);
    setDisplayedList(completedItems);
  }, [items]);

  //FUNCTION SHOWING ONLY ACTIVE ITEMS
  const displayActiveHandler = useCallback(() => {
    const activeItems = items.filter((todo) => todo.checked === false);
    setDisplayedList(activeItems);
  }, [items]);

  content = displayedList.map((item) => (
    <TodoItem key={item.id} onRemoveTodo={removeTodo} item={item} />
  ));

  // useEffect to render list of items upon list update between component rerender
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
    displayAllHandler();
    displayCompletedHandler();
    displayActiveHandler();
    console.log(items);
  }, [items, displayActiveHandler, displayAllHandler, displayCompletedHandler]);

  const handleActiveClass = (e) => {
    let filterBtns = document.querySelectorAll(".todo-tracker button");
    filterBtns.forEach((filter) => {
      filter.classList.remove("active");
    });
    let currentActive = e.target;
    currentActive.classList.add("active");
  };
  return (
    <ul className="todos">
      {items.length === 0 && (
        <p className="alert-text">
          Oops! Todo list is empty. Maybe adding one?
        </p>
      )}
      {content}
      <div className="todo-tracker">
        <span>
          {items.length > 1 ? `${items.length} items` : `${items.length} item`}{" "}
          left
        </span>
        <button
          className="active"
          onClick={(e) => {
            displayAllHandler();
            handleActiveClass(e);
          }}
        >
          All
        </button>
        <button
          onClick={(e) => {
            displayActiveHandler();
            handleActiveClass(e);
          }}
        >
          Active
        </button>
        <button
          onClick={(e) => {
            displayCompletedHandler();
            handleActiveClass(e);
          }}
        >
          Completed
        </button>
      </div>
    </ul>
  );
};
export default Todos;
