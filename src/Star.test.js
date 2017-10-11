import React from 'react'
import ReactDOM from 'react-dom';
import Stars from './components/starComponent.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stars />, div);

  // I expect there to be 5 stars
  // I expect the integer passed to match the number of filled stars
});

