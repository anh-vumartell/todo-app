import React from "react";
import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";
import Todos from "./components/Todos";
import HeroSection from "./UI/HeroSection";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todo-context";
import ThemeContextProvider from "./store/theme-context";
import { useThemeCtx } from "./store/theme-context";
function App() {
  const { isDark } = useThemeCtx();
  console.log(isDark);
  const appClassName = isDark === true ? "App-dark" : "";
  return (
    <ThemeContextProvider>
      <TodosContextProvider>
        <div className="App">
          <DarkModeToggle />
          <HeroSection />
          <main className={appClassName}>
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
    </ThemeContextProvider>
  );
}

export default App;
