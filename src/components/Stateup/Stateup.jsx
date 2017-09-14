import React,{Component} from 'react';
import FieldsetGroup from '../FieldsetGroup/FieldsetGroup';

class Stateup extends Component{

	constructor(props){
		super(props);
		this.state = {tem:0,type:'c'};
		this.cha = this.cha.bind(this);
	}

	cha(value,t){
		if(t === 'f'){
			value = (value-32)*5/9;
		}
		this.setState({
			tem:value,
			type:t
		})
	}

	render(){
		return (
			<div>
				<form>
					<FieldsetGroup t='c' tem={this.state.tem} inputChange={this.cha}/>
					<FieldsetGroup t='f' tem={this.state.tem*1.8+32} inputChange={this.cha}/>
				</form>
				<div>{this.state.type === 'c' ? '摄氏℃:'+this.state.tem : '华氏℉:'+(this.state.tem*1.8+32)}{}</div>
			</div>
		);
	}
}

export default Stateup;