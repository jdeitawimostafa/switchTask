import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
     <Router>
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/search">
        <App />
        </Route>
    </Switch>
    </Router>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
