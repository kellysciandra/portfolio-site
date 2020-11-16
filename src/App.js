import React, { Component } from 'react';
import './App.css';
import Home from './layout/Home'
import NavBar from './layout/NavBar'
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom'
import history from './history'
import  About  from './components/About'
import  Projects  from './components/Projects'
import WidthAndHeight from './layout/WidthAndHeight'

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  render() {
    return (    
    <div>
    <Router history={history}>
      <NavBar/>
      {/* <WidthAndHeight/> */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
      </Switch>
    </Router>
    </div>
    )
  }
}

export default connect()(App);