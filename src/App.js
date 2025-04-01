import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app-container">
      <h1>To-Do List ✅</h1>
      <TodoList />
    </div>
  );
}

export default App;
