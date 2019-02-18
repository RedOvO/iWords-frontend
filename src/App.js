import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './pages/login/login'
import SignUp from './pages/signup/signup'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <SignUp className = "SignUp"/>
      </div>
    );
  }
}

export default App;
