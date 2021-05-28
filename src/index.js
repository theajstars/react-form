import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Contact from './Components/Contact';
import About from './Components/About';

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        
    </Router>,
  document.getElementById('root')
);