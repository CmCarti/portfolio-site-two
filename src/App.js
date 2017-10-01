import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
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


    }
  }

  componentDidMount(){
    // Get About data;
    prismic(this, 'about', "about", 'single');
    // Get websites
    prismic(this, 'websites','website', 'post');
    // Get Apps
    prismic(this, 'apps', 'app', 'post');

  }


  render() {

    // If any of the data is not loaded, return the load screen
    if(!this.state.about || !this.state.websites || !this.state.apps ) return(<Loading />)

    return (
      <BrowserRouter>
        <div>
          <Header />
          <About data={this.state.about} />

          <Switch>
            <Route path="/websites" component={(props) => (<Posts type="websites" data={this.state.websites} {...props} />)} />
            <Route path="/" component={ ((props)=>{
              return <Posts type="apps" data={this.state.apps} {...props} />
            }) } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
