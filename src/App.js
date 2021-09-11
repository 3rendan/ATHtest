//import React, { useState } from 'react';
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import './index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
//import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import NavTabs from "./components/NavTabs";
import Collections from "./components/Collections";
import Collection from "./components/Collection";
import Tags from "./components/Tags";
import Tag from "./components/Tag";
import Item from "./views/Item";
import Items from "./views/Items";
import Browse from "./views/Browse";

let hist = createBrowserHistory();

/**
 * App
 */
export default function App (){
    return (
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
              <Route path='/tags' exact strict component={ Tags } />
              <Route path='/tag/:id' exact strict component={ Tag } />
              <Route path='/items' exact strict component={ Items } />
              <Route path='/item/:id' exact strict component={ Item } />
            </div>
            <Footer />
        </div>
        <div className="container">
          <main>
          </main>
        </div>
      </Router>
    );
  }
