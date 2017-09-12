import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Top from './Top/Top'
import Jsxtl from './Jsxtl/Jsxtl'
import Timei from './Timei/Timei'
import {Route,NavLink} from 'react-router-dom'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn:true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        console.log(e);
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));       
    }

    componentDidMount(){
        fetch('/arr')
        .then(res => {return res.json()})
        .then((json) => {
            console.log(json);
            this.setState({name: json.name})
        })
        .catch((ex) => {
            console.log(ex)
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img onClick={this.handleClick} src={logo} className="App-logo" alt="logo" />
                    <h2>{this.state.name}</h2>
                    <h2>{this.state.isToggleOn?'ON':'OFF'}</h2>
                </div>
                <p className="App-intro">
                To get started, edit{this.props.value} <code><NavLink to="/Jsxtl" activeClassName="active">src/App.js</NavLink></code> and save to reload.
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
