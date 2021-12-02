import TodoItem from "../components/TodoItem";
import { useTodoCtx } from "../store/todo-context";

const Todos = () => {
  const { removeTodo, items, completedItems } = useTodoCtx();

  return (
    <ul className="todos">
      {items.length === 0 && (
        <p className="alert-text">
          Oops! Todo list is empty. Maybe adding one?
        </p>
      )}
      {items.map((item) => (
        <TodoItem key={item.id} onRemoveTodo={removeTodo} item={item} />
      ))}
      <div className="todo-tracker">
        <span>
          {items.length > 1 ? `${items.length} items` : `${items.length} item`}{" "}
          left
        </span>
        <span>All</span>
        <span>Active</span>
        <span>{completedItems.length} Completed</span>
      </div>
    </ul>
  );
};
export default Todos;
