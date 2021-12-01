import TodoItem from "../components/TodoItem";
import { useTodoCtx } from "../store/todo-context";
//type definition

const Todos: React.FC = () => {
  const { removeTodo, items } = useTodoCtx();
  return (
    <ul className="todos">
      {items.map((item) => (
        <TodoItem key={item.id} onRemoveTodo={removeTodo} item={item} />
      ))}
    </ul>
  );
};
export default Todos;
