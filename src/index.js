import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import './index.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import App from "./App";
import About from "./components/About";
import Item from "./views/Item";
import Items from "./views/Items";


import * as serviceWorker from './serviceWorker';

let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <div className='App'>
      <Header />
      <section className='container'>
      <Route path='/' exact strict component={ About } />
      <Route path='/x' exact strict component={ App } />
      <Route path='/items' exact strict component={ Items } />
      <Route path='/item/:id' exact strict component={ Item } />
      </section>
      <Footer />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
