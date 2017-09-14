import React,{Component} from 'react';

class Listmap extends Component{
	render(){
		const arr = ['1','国家','例子','xx'];
		const html = arr.map((arg,index) => 
			<li key={index+arg}>{arg}</li>
		);
		return (
			<ul>{html}</ul>
		);
	}
}

export default Listmap;