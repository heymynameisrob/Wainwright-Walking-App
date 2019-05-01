import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import Loading from './components/Loading';

// Routes
import Home from './routes/Home';
import Dashboard from './routes/Dashboard';
import Search from './routes/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      isAuthed: false,
      userData: {}
    }
  }
  componentDidMount() {
    const _this = this;
    firebase.auth().onAuthStateChanged((u) => {
      if (u) {
        _this.setState({
          isLoading: false,
          isAuthed: true,
          userData: {
            loggedIn: true,
            uid: u.uid,
            name: u.displayName,
            avatar: u.photoURL
          }
        });
      } else {
        _this.setState({
          isLoading: false,
        })
      }
    })
  }
  render() {
    const { isAuthed, isLoading, userData } = this.state;

    const Dash = () => (
      <Dashboard userData={userData} />
    );

    if (isLoading) {
      return <Loading />
    }

    if (!isAuthed) {
      return <Home />
    }

    return (
      <Switch>
        <Route exact path='/' component={isAuthed ? Dash : Home} />
        <Route path="/search" component={Search} />
      </Switch>
    );
  }
}

export default App;