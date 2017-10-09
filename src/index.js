import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import GroceryApp from './GroceryApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GroceryApp />, document.getElementById('root'));
registerServiceWorker();
