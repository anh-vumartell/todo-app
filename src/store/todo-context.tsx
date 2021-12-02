import React, { useState, useContext } from "react";
import Todo from "../models/todo";
import { INITIAL_TODOS } from "../utils/dummy_data";
//type definition
type typeDef = {
  items: Todo[];
  completedItems: Todo[];
  setCompletedItems: (todo: Todo) => void;
  addTodo: (todo: string) => void;
  removeTodo: (id: number) => void;
};
const TodosContext = React.createContext<typeDef>({
  items: [],
  completedItems: [],
  setCompletedItems: (todo) => {},
  addTodo: () => {},
  removeTodo: (id: number) => {},
});

const TodosContextProvider: React.FC = (props) => {
  //1. Set up state to manage rendered lisr
  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS);

  const [completedItems, setCompletedItems] = useState<Todo[]>([]);
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

  const completedItemsHandler = (todo: Todo) => {
    setCompletedItems((prevList) => [...prevList, todo]);
    console.log(completedItems);
  };

  const contextValue: typeDef = {
    items: todos,
    completedItems: completedItems,
    setCompletedItems: completedItemsHandler,
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
