import React, { useState, useContext } from "react";
import Todo from "../models/todo";
import { INITIAL_TODOS } from "../utils/dummy_data";
//type definition
type typeDef = {
  items: Todo[];
  setItems: (todos: Todo[]) => void;
  addTodo: (todo: string) => void;
  removeTodo: (id: number) => void;
};
const TodosContext = React.createContext<typeDef>({
  items: [],
  setItems: (todos: Todo[]) => {},
  addTodo: () => {},
  removeTodo: (id: number) => {},
});

const TodosContextProvider: React.FC = (props) => {
  //1. Set up state to manage rendered lisr
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    const initialList = JSON.parse(storedTodos);
    return initialList || INITIAL_TODOS;
  });

  //2. a function to handle input
  const addTodoHandler = (todo: string) => {
    const newTodo = new Todo(todo);
    //3. use concat() method not to mutate the original array
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
    // console.log(todos);
  };

  const removeTodoHandler = (todoId: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: typeDef = {
    items: todos,
    setItems: setTodos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export const useTodoCtx = () => {
  return useContext(TodosContext);
};
export default TodosContextProvider;
