import React, { Component } from 'react';
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() { 
		return ( 
		<div  style = {{backgroundColor:'white'}}>
		<img src = "https://image4.owler.com/logo/stackline_owler_20170129_010716_original.png" alt ="StackLine Logo" height="40" style ={{ margin:'20px'}}></img>
		</div>
		 );
	}
}
export default Header;