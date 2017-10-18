import React from 'react';

export default class Carousel extends React.Component{

	// Dev Note: Still missing the PrimaryImage - will need to add this as images[0]
	
	// Set state for image population and "active" image style
	constructor(props){
		super(props);

		this.state = {
			activeIndex:0
		};
		
	}

	// goToImage() (click on image)
	// -- set activeIndex to clicked image index
	goToImage(index ,e){
		e.preventDefault();
		this.setState({activeIndex:index});
	}

	// goToPrevImage (arrow click)
	// --if activeIndex < 1 , onclick set activeIndex to images.length (last image)
	// --else set activeIndex to activeIndex - 1
	goToPrevImage(e){
		e.preventDefault();
		var index = this.state.activeIndex;
		const { images } = this.props;
		
		if(index < 1){
			index = images.length;
		}
		--index;

		this.setState({
			activeIndex:index
		});
	}

	// goToNextImage (arrow click)
	// --if activeIndex == images.length, onclick set activeIndex to imaged[0] (first image)
	// --else set activeIndex to activeIndex + 1
	goToNextImage(e){
		e.preventDefault();
		var index = this.state.activeIndex;
		const { images } = this.props;
		var imagesLength = images.length -1;

		if(index === imagesLength){
			index = images[0];
			index = -1;
		}
		++index;

		this.setState({
			activeIndex:index
		});
	}

	render(){
		return(
			<div className="image-viewer">
				<div className="showcase-image">
					<img alt="Product description tbd" src={this.props.images[this.state.activeIndex].image} />
				</div>
				<a className="zoom"><i className="zoom-icon fa fa-search-plus"></i>view larger</a>
				<div className="carousel">
					<a aria-label="Go to previous image" className="left-arrow" onClick={e => this.goToPrevImage(e)}>
						<i className="fa fa-angle-left"></i>
					</a>
					<ul>
						{/* Map image array, parse out list item with anchor/image source */}
						{this.props.images.map((image, index) =>
							// set the class name to active if index equals the activeIndex
							<li className={index === this.state.activeIndex 
								? "carousel__image carousel__image-active" 
								: "carousel__image" }
								key={index}>
								<a onClick={e => this.goToImage(index, e)} ><img alt="product description tbd" src={image.image} /></a>
							</li>
						)}
					</ul>
					<a aria-label="Go to next image" className="right-arrow" onClick={e => this.goToNextImage(e)}>
						<i className="fa fa-angle-right"></i>
					</a>
				</div>
			</div>
		);
	}

}