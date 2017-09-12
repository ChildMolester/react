import React, { Component } from 'react';
import {Link} from 'react-router-dom'

function formatName(user){
	return user.firstName + ' ' + user.lastName;
}

const user = {
	firstName: 'Harper',
	lastName: 'Perez'
}

class Jsxtl extends Component {
	render(){
		return (
			<h1 data-name={user.firstName}><Link to="/">Hello,{formatName(user)}!</Link></h1>
		);
	}
}

export default Jsxtl;