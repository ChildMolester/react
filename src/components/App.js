import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Top from './Top/Top'
import Jsxtl from './Jsxtl/Jsxtl'
import Timei from './Timei/Timei'
import {Route,Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code><Link {...this.props} to="/Jsxtl" activeClassName="active">src/App.js</Link></code> and save to reload.
        </p>
        <Timei color="red"/>
        <main>
          <Route color="red" exact path="/" component={Top}>                
          </Route>
          <Route path="/Jsxtl" component={Jsxtl}>                
          </Route>
        </main>         
      </div>
    );
  }
}

export default App;
