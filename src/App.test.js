import React from 'react';
import ReactDOM from 'react-dom';
import GroceryApp from './GroceryApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GroceryApp />, div);
});
