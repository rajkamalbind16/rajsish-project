import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Task from "./components/task/Task";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Task />
      </div>
    );
  }
}

export default App;
