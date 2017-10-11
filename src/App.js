import React, { Component } from 'react';

import './css/main.css';
import Stars from './components/starComponent.js';
// import Button from './components/button.js';
import Product from './components/productComponent.js';
// import FontAwesome from 'react-fontawesome';
import appdata from './api/item-data.json';

// components to break apart:
// CatalogEntryView contains entirety of app
//  CustomerReview displays and filters comments best/worst
// product images

function Reviews(props){
  console.log(props.reviews)
  const pro = props.reviews.Pro[0];
  const con = props.reviews.Con[0];
  
  return (
    <section className="reviews">
      {/*TEST: If OverallReview props are passed correctly, 
      render overall review component with data */}
      <OverallReview 
        rating={props.reviews.consolidatedOverallRating}
        number={props.reviews.totalReviews} />
     
      <div className="comment-container">
        {/* TEST: If Comment props are passed correctly, 
      render Pro and Con comments in comment-container with data */}
        {/* TODO: Split out heading from comment so comment is more reusable. 
        Or conditionally hide/show the header if props exist*/}
        <Comment 
          heading="Pro" 
          text="most helpful 4-5 star review"
          rating={pro.overallRating}
          title={pro.title} 
          description={pro.review} 
          user={pro.screenName} 
          date={pro.datePosted} />
        <Comment 
          heading="Con"
          text="most helpful 1-2 star review"
          rating={con.overallRating}
          title={con.title} 
          description={con.review}
          user={con.screenName} 
          date={con.datePosted} />
      </div>
    </section>
  )
}

function OverallReview(props){
  return (
    <div className="overall-review">
    {/* TEST: If OverallReview renders correctly,
    the stars component will fill appropriate # or stars  */}
      <Stars rating={props.rating} />

      <p>overall</p>
      <span>
      {/* TEST: If Overall Review renders correctly
       the # of total comments will appear in link */}
        <a>view all {props.number} reviews</a>
      
      </span>
    </div>
  )
}


function Comment(props){

  return (

    <div className="comment">
      <div className="comment-header">
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
      </div>

      <Stars rating={props.rating} />

      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <p className="comment-date">{props.user} {props.date}</p>
    </div>
  );
}

class App extends Component {

  render() {
    console.log(appdata);
    const catalog = appdata.CatalogEntryView[0];
    const reviews = catalog.CustomerReview[0];
    
    return (
      <div className="app">
        <Product catalog={catalog} />

      {/* If reviews data was passed, render reviews component with data */}
        <Reviews reviews={reviews} />
        
      </div>
    );
  }
}

export default App;
