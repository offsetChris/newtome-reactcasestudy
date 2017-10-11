import React from 'react';

export default class Button extends React.Component{

	render(){
		// handleClick is an option here along with
		// setState for hover/focus/disabled/clicked
		return (
			
			<a className={this.props.type} href={this.props.href} target={this.props.target}>{this.props.text}</a>
			
		)

	}
}