import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Contact } from './components/Contact';
import { Info } from './components/Info';
import { Navbar } from './components/Navbar';
import Accueil from './components/Accueil';
import Post from './components/Post';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Accueil} />
          <Route path="/info" component={Info} />
          <Route path="/contact" component={Contact} />
          <Route path="/:post_id" component={Post} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
