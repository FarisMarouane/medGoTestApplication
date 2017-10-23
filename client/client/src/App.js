import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Navbar } from './navbar';
import { Form } from './form';
import { Admin } from './admin';
import './App.css';

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={FormPage} />
          {/* Path whenre webmaster can see all the messages he received */}
          <Route path='/admin' component={AdminPage} />
        </div>
      </Router>
    );
  }
}

class FormPage extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Form />
      </div>
    );
  }
}

class AdminPage extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Admin />
      </div>
    );
  }
}

export default App;
