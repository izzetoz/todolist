import React, { Component } from 'react';
import {TodoList} from './todoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <TodoList></TodoList>
        </header>
      </div>
    );
  }
}

export default App;
