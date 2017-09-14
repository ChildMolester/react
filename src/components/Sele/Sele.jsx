import React,{Component} from 'react';

class Sele extends Component{

	constructor(props){
		super(props);
		this.state = {value:'coconut'};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleChange(event){
		this.setState({value:event.target.value});
	}

	handleSubmit(event){
		alert(this.state.value);
		event.preventDefault();
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					pick
					<select value={this.state.value} onChange={this.handleChange}>
						<option value="grape">Grape</option>
						<option value="lime">Lime</option>
						<option value="coconut">Coconut</option>
					</select>
				</label>
				<input type="submit" value="Submit"/>
			</form>
		);
	}
}

export default Sele;