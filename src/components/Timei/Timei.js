import React,{Component} from 'react';

const ti = () => {
	return new Date().toLocaleTimeString()
}
class Timei extends Component {
	static propTypes = {
		onStep:React.PropTypes.func
	}

	constructor(props) {
	    super(props);
	    this.state = {date: new Date()};
	    this.interval = setInterval(() => {
	    	var date = new Date();
	    	this.setState({date});
	    },1000)
	}

	render(){
		return (
			<div>{this.state.date.toLocaleTimeString()}</div>
		);
	}
}

export default Timei;