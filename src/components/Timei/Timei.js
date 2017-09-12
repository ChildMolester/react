import React,{Component} from 'react';
import './Timei.css';

class Timei extends Component {
	static propTypes = {
		onStep:React.PropTypes.func
	}

	constructor(props) {
	    super(props);
	    this.state = {date: new Date()};
	    this.interval = setInterval(() => {
	    	this.setState({date:new Date()});
	    },1000)
	}

	render(){
		return (
			<div>{this.state.date.toLocaleTimeString()}</div>
		);
	}
}

export default Timei;