import React,{Component} from 'react';
import './Timei.css';

class Timei extends Component {
	// static propTypes = {
	// 	onStep:React.PropTypes.func
	// }

	constructor(props) {
	    super(props);
	    this.state = {date: new Date()};
	    this.interval = setInterval(() => {
	    	this.setState({date:new Date()});
	    },1000)
	}

	componentDidMount(){

	}

	render(){
		let son = this.props.isOn;
		if(son){
			return (
				<div>{this.props.name}-{this.state.date.toLocaleTimeString()}</div>
			);
		}else{
			return (
				<div>时间-{this.state.date.toLocaleTimeString()}</div>
			);
		}
		
	}
}

export default Timei;