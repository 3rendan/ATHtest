import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import './index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import App from "./App";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Collections from "./components/Collections";
import Collection from "./components/Collection";
import Item from "./views/Item";
import Items from "./views/Items";
import Browse from "./views/Browse";
import Spinner from "./services/Spinner";


import * as serviceWorker from './serviceWorker';
import NavTabs from './components/NavTabs';

let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <div className='App'>
      <Header />
        <Navigation />
        <div className='container'>
          <Route path='/' exact strict component={ About } />
          <Route path='/nav' exact strict component={ NavTabs } />
          
          <Route path='/browse' exact strict component={ Browse } />
          <Route path='/collections' exact strict component={ Collections } />
          <Route path='/collection/:id' exact strict component={ Collection } />
          <Route path='/items' exact strict component={ Items } />
          <Route path='/item/:id' exact strict component={ Item } />
        </div>
        <Footer />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
