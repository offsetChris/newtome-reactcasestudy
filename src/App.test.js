import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


describe('Addition', () =>{
	it('knows that 2 and 2 make 4', () =>{
		expect(2+2).toBe(4);
	});
});

/*TEST: If OverallReview props are passed correctly, 
render overall review component with data */
	// overallReview is rendered
	// overallReview recieved certain props

// stars component displays the correct number of stars

// Pro and con comments display correctly

// Product image displays correctly

// Product description matches title and image