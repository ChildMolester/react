import React,{Component} from 'react';

class FieldsetGroup extends Component {
	constructor(props){
		super(props);
		if(props.t === 'c'){
			this.state = {'name':'摄氏℃'};
		}else{
			this.state = {'name':'华氏℉'}
		}
		this.fieldChange = this.fieldChange.bind(this);
	}

	fieldChange(event){
		// if(event.target.value === 0){
		// 	event.target.value = '';
		// 	return;
		// }
		this.props.inputChange(event.target.value,this.props.t);
	}

	render(){
		return (
			<fieldset>
				<legend>{this.state.name}</legend>
				<input type="text" value={this.props.tem} onChange={this.fieldChange}/>
			</fieldset>
		);
	}
}

export default FieldsetGroup;