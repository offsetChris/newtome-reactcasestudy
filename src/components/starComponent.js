import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class Stars extends React.Component{
	constructor(props) {
    	super(props);
	}

	render(){
		var stars = [];
		var rating = this.props.rating;
		for(var i= 0; i < 5; i++){
			if(i < rating){
				stars.push(<FontAwesome className="star star--filled" name="star" />);
			} else{
				stars.push(<FontAwesome className="star" name="star" />);
			}
			
		}
		return (

			<div className="rating-test">
				{stars}
			</div>
		)
	}	
}
