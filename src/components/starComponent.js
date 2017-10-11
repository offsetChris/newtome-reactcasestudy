import React from 'react';
// import FontAwesome from 'react-fontawesome/lib';

export default class Stars extends React.Component{
// Current state is a read only star rating based on data input
// Refer to W3 documentation for making click accessible enhancements to this component 
// --> https://www.w3.org/WAI/tutorials/forms/custom-controls/ (example 2 star rating)
	render(){
		var stars = [];
		var rating = this.props.rating;

		// hard coded for max 5 star rating
		for(var i= 0; i < 5; i++){
			if(i < rating){
				stars.push(<i key={i} className="star--filled fa fa-star"></i>);
			} else{
				stars.push(<i key={i} className="star fa fa-star"></i>);
			}
			
		}
		return (
			<div className="rating">
				{stars}
			</div>
		)
	}	
}
