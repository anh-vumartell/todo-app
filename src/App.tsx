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
        <footer>
          <div className="footer-text">
            <p>Minimal Todo App © 2021</p>
            <p>
              Designed & coded by{" "}
              <a href="https://github.com/anh-vumartell/todo-app">
                Anh Vu-Martell
              </a>
            </p>
            <p>
              Image credit to contributor from{" "}
              <a href="https://unsplash.com/photos/0jIovxJj7pY">Unplash</a>
            </p>
          </div>
        </footer>
      </div>
    </TodosContextProvider>
  );
}

export default App;
