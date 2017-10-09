import React, { Component } from 'react';
import logo from './logo.svg'; // XX comment this out when dev starts
import './css/main.css';
import Stars from './components/starComponent.js';
// import FontAwesome from 'react-fontawesome';
import appdata from './api/item-data.json';
import FontAwesome from 'react-fontawesome';

// components to break apart:
// CatalogEntryView contains entirety of app
//  CustomerReview displays and filters comments best/worst
// product image


// star component

function Reviews(props){
  // const catalog = appdata.CatalogEntryView[0];
  // const reviews = catalog.CustomerReview[0];
  console.log(props.reviews)
  const protitle = props.reviews.Pro[0].title;
  const proreview = props.reviews.Pro[0].review;
  const prodate = props.reviews.Pro[0].datePosted;
  const contitle = props.reviews.Con[0].title;
  const conreview = props.reviews.Con[0].review;
  const condate = props.reviews.Con[0].datePosted;
  return (
    <div className="reviews">
      <OverallReview 
        rating={props.reviews.consolidatedOverallRating}
        number={props.reviews.totalReviews} />
     
      <div className="comment-container">
        
        <Comment 
          heading="Pro" 
          text="most helpful 4-5 star review"
          rating={props.reviews.Pro[0].overallRating}
          title={protitle} 
          description={proreview} 
          date={prodate} />
        <Comment 
          heading="Con"
          text="most helpful 1-2 star review"
          rating={props.reviews.Con[0].overallRating}
          title={contitle} 
          description={conreview} 
          date={condate} />
      </div>
    </div>
  )
}

function OverallReview(props){
  return (
    <div className="overall-review">
      <div className="rating">
        <Stars rating={props.rating} />
      </div>
      <p>overall</p>
      <span>
        <a href="javascript:void(0);">view all {props.number} reviews</a>
      </span>
    </div>
  )
}

// function SetRating(props){
//   var icons = document.getElementsByClassName('star');
//   for(var i=0; i < props.rating; i++){
//     icons[i].className += ' filled';
//   }
//   return(
//     <span className="teststar">{icons}</span>
//   );
// }

function Comment(props){

  return (

    <div className="comment">
      <div className="comment-header">
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
      </div>
      <div className="rating">
        <Stars rating={props.rating} />
      </div>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <p className="comment-date">{props.date}</p>
    </div>
  );
}

class App extends Component {

  componentDidMount(){
    // DCPI = appdata.CatalogEntryView[0].DPCI
    // const catalog = appdata.CatalogEntryView[0];
    // const DCPI = catalog.DPCI;
    // const reviews = catalog.CustomerReview[0];

    // const con = reviews.Con;
    // const pro = reviews.Pro;
    // console.log(con);

  }


  render() {
    const catalog = appdata.CatalogEntryView[0];
    const reviews = catalog.CustomerReview[0];
    return (
      <div className="grocery-app">
        <section className="product">
          <h1 className="product-title">Product title</h1>
          {/*Image display and thumbnails should be in a separate component*/}
          <img src={logo} className="image-viewer" alt="product title" />
          <a className="zoom" href="javascript:void(0);">
            <FontAwesome className="zoom-icon" name="search-plus" />
          view larger</a>
          <div className="image-viewer--thumbnails">
            <a href="javascript:void(0);"><FontAwesome className="left-arrow" name="angle-left" /></a>
            <img src={logo} alt="product title" />
            <img src={logo} alt="product title" />
            <img src={logo} alt="product title" />
            <a href="javascript:void(0);"><FontAwesome className="left-arrow" name="angle-right" /></a>
          </div>
          <div className="product-info">
            <p className="product-price">$Price <span>online price</span></p>
            <div className="product-offers">
              <a href="target.com" target="_blank">Link 1</a>
              <a href="target.com" target="_blank">Link 2</a>
            </div>
            {/* quantity should be a new component */}
            <div className="quantity">
              <span>quantity</span>
              <a href="javascript:void(0);"><FontAwesome className="plus" name="plus" /></a>
              <span>#</span>
              <a href="javascript:void(0);"><FontAwesome className="minus" name="minus" /></a>
            </div>
            <div className="cart-buttons">
              {/*buttons should be a component passing props*/}
              <a className="button-secondary" href="javascript:void(0);">Pick up in store</a>
              <p>View in store</p>
              <a className="button-primary" href="javascript:void(0);">Add to cart</a>
            </div>
            <div className="return-policy">
              <span><p>returns</p></span>
              <span><p>This item must be returned within 30 days of the ship date. See <a href="target.com">return policy</a> for details. Prices, promotions, styles and availability may vary by store and online.</p></span>
            </div>

            <a className="button-secondary" href="javascript:void(0);">Add to registry</a>
            <a className="button-secondary" href="javascript:void(0);">Add to list</a>
            <a className="button-secondary" href="javascript:void(0);">Share</a>

            <div className="product-description">
              <h3>Product Highlights</h3>
            {/* product description component loop through product items and write to li */}
              <ul>
                <li>item 1</li>
              </ul>
            </div>
          </div>
        </section>
        <Reviews reviews={reviews} />
        
      </div>
    );
  }
}

export default App;
