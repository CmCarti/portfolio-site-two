import React, { Component } from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import './App.css';
import prismic from './prismic-data';
import Loading from './loading';
import Header from './components/header';
import About from './components/about';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: undefined,
      websites: undefined,
      apps: undefined
    }
  }

  componentDidMount(){
    // Get About data;
    prismic(this, 'about', "about", 'single');
    // Get websites
    prismic(this, 'websites', 'website', 'post');
    // Get Apps
    prismic(this, 'apps', 'app', 'post');

  }
  
  render() {
    
    if(this.state.about === undefined && this.state.websites === undefined && this.state.apps === undefined) return(<Loading />)
    return (
      <BrowserRouter>
        <div>
          <Header />
          <About data={this.state.about} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;