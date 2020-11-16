import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import style from './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import SqImg from "./services/SqImg";
// import Navigation from "./views/Navigation";
import App from "./App";
import About from "./views/About";
import Item from "./views/Item";
import Items from "./views/Items";
// import indexRoutes from "./routes/indexRoutes.js";

import * as serviceWorker from './serviceWorker';

let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <div className='App'>
      <Header />
      <Route path='/' exact strict component={ About } />
      <Route path='/x' exact strict component={ App } />
      <Route path='/b' exact strict component={ SqImg } />
      <Route path='/items' exact strict component={ Items } />
      <Route path='/item/:id' exact strict component={ Item } />
      <Footer />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
