import "./App.css";
import ToDoList from "./components/ToDoList";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="app-title">MY TODO LIST :)</h1>
        <ToDoList />
      </div>
    );
  }
}

export default App;
