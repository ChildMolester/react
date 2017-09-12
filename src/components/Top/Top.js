import React, { Component } from 'react';
import './Top.css';
import {Link} from 'react-router-dom'

class Top extends Component {
	render(){
		return (
			<ul className="top-nav">
				<li><Link to="/Jsxtl">顶部</Link></li>
			</ul>
		);
	}
}

export default Top;