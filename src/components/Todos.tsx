import TodoItem from "../components/TodoItem";
import { useTodoCtx } from "../store/todo-context";
//type definition

const Todos: React.FC = () => {
  const { removeTodo, items } = useTodoCtx();
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
        <span>Completed</span>
      </div>
    </ul>
  );
};
export default Todos;
