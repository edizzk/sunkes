import './App.css';
import React, { Component } from 'react';
import DrawerBar from './components/DrawerBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePlan from './pages/CreatePlan';
import ViewPlan from './pages/ViewPlan';

/*class App extends Component {

  constructor() {
    super();

    this.state = {
      todos: [],
      number: 4
    }

    this.deleteTodo = this.deleteTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.createTodo = this.createTodo.bind(this);

  }

  componentDidMount() {
        this.setState({
          todos: [
            {"id": 1, "content": "DENEMEEEEEE 1", "completed": true},
            {"id": 2, "content": "DENEMEEEEEE 2", "completed": true},
            {"id": 3, "content": "DENEMEEEEEE 3", "completed": false},
            {"id": 4, "content": "DENEMEEEEEE 4", "completed": false},
          ],
        });
  }

  deleteTodo(todoId) {
    const todos = this.state.todos.filter((todo) => todo.id !== todoId);
    this.setState({todos});
    console.log(todos);
  }

  completeTodo(todoId) {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !(todo.completed);
      }
      return todo;
    });
    this.setState({todos});
    console.log(todos);
  }

  
  createTodo(content) {
    const number = this.state.number + 1;
    const todos = this.state.todos.concat([{"id": number, "content": content, "completed": false}]);
    this.setState({todos, number});
    console.log(todos);
  }

  render() {
    return (
      <div className="App">
        <AddTodo createTodo={this.createTodo}/>
        <TodoList todos={this.state.todos}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}/>
      </div>
    );
  }

}

export default App; */


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <DrawerBar />
          <Routes>
            <Route path='/' exact element={ <Home/> } />
            <Route path='/createplan' element={ <CreatePlan/> } />
            <Route path='/viewplan' element={ <ViewPlan/> } />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;