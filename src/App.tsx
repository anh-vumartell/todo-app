import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import HeroSection from "./UI/HeroSection";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todo-context";

function App() {
  return (
    <TodosContextProvider>
      <div className="App">
        <HeroSection />
        <main>
          <NewTodo />
          <Todos />
        </main>
      </div>
    </TodosContextProvider>
  );
}

export default App;
