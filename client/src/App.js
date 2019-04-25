import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Login from './routes/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthed: true
    }
  }
  componentDidMount() {
    // Firebase Auth will go here
  }
  render() {
    const { isAuthed } = this.state;

    if (!isAuthed) {
      return <Login />
    }

    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    );

    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;