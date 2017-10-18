// product detail component with image and desciptions 
// (could break this down into smaller components further)

import React from 'react';
import Button from './button.js';
import Carousel from './carousel.js';


export default class Product extends React.Component{
	render(){
		const offers = this.props.catalog.Offers[0];
		const images= this.props.catalog.Images[0].AlternateImages;
		const description = this.props.catalog.ItemDescription[0];
		const promotions = this.props.catalog.Promotions;
		const channelCode = this.props.catalog.purchasingChannelCode;
		

		var promoArray = [];
		for(var p=0; p< promotions.length; p++){
			promoArray.push(<li  className="promo-item" key={p}>{promotions[p].Description[0].shortDescription}</li>);
		}

		var highlightArray = [];
		for(var h=0; h< description.features.length; h++){
			// remove any inline styling
			var reg = /(<([^>]+)>)/ig;
			var highlightText = description.features[h].replace(reg,'');
			highlightArray.push(<li className="highlight-item" key={h}>{highlightText}</li>);
		}

		var cartbtn = false;
		var storebtn = false;
		switch(channelCode){
			case '0':
				cartbtn =true;
				storebtn=true;
				break
			case '1':
				cartbtn = true;
				break;
			case '2':
				storebtn=true;
				break;
			default:
				cartbtn=false;
				storebtn=false;
		}
		// console.log(channelCode);
		// console.log(cartbtn);
		

  	return (
	    <section className="product">
	      
	      <div className="product-showcase">
	        <h1 className="product-title">{this.props.catalog.title}</h1>
	        {/* Carousel component contains thumnail images and showcase image */}
	        <Carousel images={images} />
	      </div>

	      <div className="product-info">
	        <p className="product-price">{offers.OfferPrice[0].formattedPriceValue} <span>{offers.OfferPrice[0].priceQualifier}</span></p>
	        <ul className="product-promo">
	          {promoArray}
	        </ul>
	        {/* quantity should be a new component */}
	        <div className="quantity-container">
	          <label htmlFor="quantity">quantity:</label>
	          <button aria-controls="number"><i className="plus fa fa-plus"></i></button>
	          <input role="alert" aria-live="assertive" readOnly="readonly" type="text" name="quantity" id="quantity" value="1"/>
	          <button aria-controls="number"><i className="fa fa-minus"></i></button>
	        </div>

	        <div className="cart-buttons">
	      		{storebtn === true && <Button type="button--secondary" href="target.com" text="Pick up in store"/>}
	      		{cartbtn === true && <Button type="button--primary" href="target.com" text="Add to cart" /> }
	      	</div>

	        <a className="in-store" href="target.com">Find in store</a>
	        <div className="return-policy">
	          <p className="return-title">returns</p>
	        {/* use returnPolicy for functionality of return policy link. Unknown business requirements */}
	          <p className="return-description">This item must be returned within 30 days of the ship date. See <a href="target.com">return policy</a> for details. Prices, promotions, styles and availability may vary by store and online.</p>
	        </div>

	        <div className="social-buttons">
	      {/* Future TEST: Click on buttons shows correct page.  */}
	          <Button type="button--grey" href="target.com" text="Add to registry" />
	          <Button type="button--grey" href="target.com" text="Add to list" />
	          <Button type="button--grey" href="target.com" text="Share" />
	        </div>

	        <div className="product-description">
	          <h3>Product Highlights</h3>
	        {/* product description component loop through product items and write to li */}
	          <ul>
	            {highlightArray}
	          </ul>
	        </div>
	      </div>


	    </section>
  	);
  }
}