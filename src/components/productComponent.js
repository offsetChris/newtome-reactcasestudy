// product detail component with image and desciptions (could break this down further)

import React from 'react';
// import FontAwesome from 'react-fontawesome/lib';
import Button from './button.js';
const FontAwesome = require('react-fontawesome');


export default class Product extends React.Component{
	render(){
		const offers = this.props.catalog.Offers[0];
		const images= this.props.catalog.Images[0];
		const description = this.props.catalog.ItemDescription[0];
		const promotions = this.props.catalog.Promotions;
		// const offer = props.catalog.Offers[0];
		// const returnPolicy = this.props.catalog.ReturnPolicy[0];

		var altImgArray= [];
		var dataImages = images.AlternateImages;
		for (var i=0; i< dataImages.length; i++ ){
			altImgArray.push(<img src={dataImages[i].image} key={i} alt="product title" />);
		}

		var promoArray = [];
			for(var p=0; p< promotions.length; p++){
			promoArray.push(<li  className="promo-item" key={p}>{promotions[p].Description[0].shortDescription}</li>);
		}

		var highlightArray = [];

		for(var h=0; h< description.features.length; h++){
			var reg = /(<([^>]+)>)/ig;
			var highlightText = description.features[h].replace(reg,'');
			highlightArray.push(<li className="highlight-item" key={h}>{highlightText}</li>);
		}

  	return (
	    <section className="product">
	      
	      <div className="product-showcase">
	        <h1 className="product-title">{this.props.catalog.title}</h1>
	        {/* Image display and thumbnails should be in a separate component */}
	        <img src={images.PrimaryImage[0].image} className="image-viewer" alt="product title" />
	        <a className="zoom">
	          <FontAwesome className="zoom-icon" name="search-plus" />
	        view larger</a>
	        <div className="image-viewer--thumbnails">
	          <a><FontAwesome className="left-arrow" name="angle-left" /></a>
	          {altImgArray}
	          <a><FontAwesome className="right-arrow" name="angle-right" /></a>
	        </div>
	      </div>

	      <div className="product-info">
	        <p className="product-price">{offers.OfferPrice[0].formattedPriceValue} <span>{offers.OfferPrice[0].priceQualifier}</span></p>
	        <ul className="product-promo">
	          {promoArray}
	        </ul>
	        {/* quantity should be a new component */}
	        <div className="quantity-container">
	          <label htmlFor="quantity">quantity:</label>
	          <button aria-controls="number"><FontAwesome className="plus" name="plus" /></button>
	          <input role="alert" aria-live="assertive" readOnly="readonly" type="text" name="quantity" id="quantity" value="1"/>
	          <button aria-controls="number"><FontAwesome className="minus" name="minus" /></button>
	        </div>

	        <div className="cart-buttons">
	      {/* Future TEST: Click on button shows correct page.  */}
	          <Button type="button--secondary" href="target.com" text="Pick up in store"/>
	          <Button type="button--primary" href="target.com" text="Add to cart" />
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