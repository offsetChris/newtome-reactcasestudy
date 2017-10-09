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

class GroceryApp extends Component {
  constructor(props){
    super(props);
  }


  componentDidMount(){
    // DCPI = appdata.CatalogEntryView[0].DPCI
    const catalog = appdata.CatalogEntryView[0];
    const DCPI = catalog.DPCI;
    const reviews = catalog.CustomerReview[0];

    const con = reviews.Con;
    const pro = reviews.Pro;
    console.log(con);

  }


  render() {
    const catalog = appdata.CatalogEntryView[0];
    const DCPI = catalog.DPCI;
    const reviews = catalog.CustomerReview[0];
    return (
      <div className="grocery-app">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>CustomerReview. </p>
        <Reviews reviews={reviews} />
        
      </div>
    );
  }
}

export default GroceryApp;
