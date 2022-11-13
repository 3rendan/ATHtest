import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import './index.css';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./components/general/About";
//import Modal from "./components/Modal";
import Navigation from "./components/layout/Navigation";
import NavTabs from "./components/layout/NavTabs";
import Collections from "./components/browse/Collections";
import CollectionItems from "./components/browse/CollectionItems";
import Tags from "./components/browse/Tags";
import TaggedItems from "./components/browse/TaggedItems";
import Item from "./views/Item";
import Items from "./components/browse/Items";
import Browse from "./views/Browse";
import { ItemsProvider } from './context/ItemsContext'

let hist = createBrowserHistory();

/**
 * App
 */
export default function App (){
    return (
      <ItemsProvider>
      <Router history={hist}>
        <div className='App'>
          <Header />
            <Navigation />
            <div className='container'>
              <Route path='/' exact strict component={ About } />
              <Route path='/nav' exact strict component={ NavTabs } />
              <Route path='/browse' exact strict component={ Browse } />
              <Route path='/collections' exact strict component={ Collections } />
              <Route path='/collection/:id' exact strict component={ CollectionItems } />
              <Route path='/tags' exact strict component={ Tags } />
              <Route path='/tag/:id' exact strict component={ TaggedItems } />
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
      </ItemsProvider>
    );
  }
