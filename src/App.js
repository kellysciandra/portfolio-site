import React, { Component } from 'react';
import './App.css';
import Home from './layout/Home'
import NavBar from './layout/NavBar'
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom'
import history from './history'
import  Pallets  from './components/Pallets'
import  Pallets1  from './components/Pallets1'
import  Projects  from './components/Projects'
import WidthAndHeight from './layout/WidthAndHeight'

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  render() {
    return (    
    <div>
    <Router history={history}>
      <NavBar/>
      <WidthAndHeight/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/pallets" component={Pallets}/>
        <Route exact path="/pallets/1" component={Pallets1}/>
        <Route exact path="/projects" component={Projects}/>
      </Switch>
    </Router>
    </div>
    )
  }
}

export default connect()(App);