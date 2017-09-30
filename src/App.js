import React, { Component } from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import './App.css';
import prismic from './prismic-data';
import Loading from './loading';
import Header from './components/header';
import About from './components/about';
import PortfolioHeader from './components/portfolio-header';
import Posts from './components/posts';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: undefined,
      aboutLoaded: false,
      websites: undefined,
      websitesLoaded: false,
      apps: undefined,
      appsLoaded: false
    }
  }

  componentDidMount(){
    // Get About data;
    prismic(this, 'about','aboutLoaded', "about", 'single');
    // Get websites
    prismic(this, 'websites','websitesLoaded', 'website', 'post');
    // Get Apps
    prismic(this, 'apps', 'appsLoaded', 'app', 'post');

  }


  render() {

    if(!this.state.aboutLoaded && !this.state.websitesLoaded && !this.state.appsLoaded ) return(<Loading />)

    return (
      <BrowserRouter>
        <div>
          <Header />
          <About data={this.state.about} />
          <PortfolioHeader />
          <Switch>

            <Route path="/websites" component={ (()=>{
              return <Posts type="websites" data={this.state.websites} />
            }) } />
            <Route path="/" component={ (()=>{
              return <Posts type="apps" data={this.state.apps} />
            }) } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
