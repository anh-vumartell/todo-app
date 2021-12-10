//packages
import React from "react";

//components
import DarkModeToggle from "./components/DarkModeToggle";
import HeroSection from "./UI/HeroSection";
import Footer from "./UI/Footer";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

//import contexts
import TodosContextProvider from "./store/todo-context";
import ThemeContextProvider from "./store/theme-context";

//import styles
import "./App.css";

function App() {
  return (
    <ThemeContextProvider>
      <TodosContextProvider>
        <div className="App">
          <DarkModeToggle />
          <HeroSection />
          <main>
            <NewTodo />
            <Todos />
          </main>
          <Footer />
        </div>
      </TodosContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
