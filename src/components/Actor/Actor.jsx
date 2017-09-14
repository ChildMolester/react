import React,{Component} from 'react';

class Actor extends Component{

	constructor(props){
		super(props)
		this.state={
			actor:[]
		}
	}

	componentDidMount(){
		fetch('/actor')
		.then(res => res.json())
		.then((json) => {			
			this.setState({actor:json});
			console.log(this.state);
		})
		.catch((ex) => {
			console.log(ex);
		})
	}

	render(){
		const html = this.state.actor.map((arg,index) => 
			<li key={arg.actor_id}>{arg.first_name+' '+arg.last_name}</li>
		);

		return(
			<ul>{html}</ul>
		);
	}
}

export default Actor;