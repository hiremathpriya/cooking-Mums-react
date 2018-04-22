import React, { Component } from 'react';
import CoverFlow from 'coverflow-react';
import './Components/index.css';
import Header from './Components/Header';

import CateringOrder from './Components/CateringOrder';
import Message from './Components/Message';
import Recipes from './Components/Recipes';
import Footer from './Components/Footer';
import Register from './Components/Register';
import AboutMe from './Components/AboutMe';

import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';


const imagesArr = [
  'images/0001.jpg',
  'images/0002.jpg',
  'images/0003.jpg',
  'images/0004.jpg',
  'images/0005.jpg',
  'images/0006.jpg',
  'images/0008.jpg',
  'images/0010.jpg',
  'images/0011.jpg',
  'images/0012.jpg',
  'images/0013.jpg',
  'images/0014.jpg',
  'images/0015.jpg',
  'images/0016.jpg',
  'images/0017.jpg',
  'images/0018.jpg',
  'images/0019.jpg',
  'images/0019.jpg',
  'images/0019.jpg',
  'images/0019.jpg',
  'images/0019.jpg',
  'images/0019.jpg',
  'images/0019.jpg',
  'images/0019.jpg',
  'images/0019.jpg',
  'images/0019.jpg',
  'images/0019.jpg',
  'images/0019.jpg',
  'images/0019.jpg',
  'images/0019.jpg',
  'images/0019.jpg',
  'images/0019.jpg',
  'images/0019.jpg',
  'images/0019.jpg',

];

class App extends Component {
  render() {

    console.log('images ' + imagesArr);

    return (
      <Router>
      <div className="App">
        <Header title="Cooking Mums"/>
        <CoverFlow width={1200}height={325} background="gray" imagesArr={imagesArr} />

            <Route path="/" exact render={
              ()=> {
                return(              
              <div className="container">
                  <div class="row">
                      <div class="col-xs-6">
                          <Message />
                      </div>
                      <div class="col-xs-6">
                          <Recipes />
                      </div>
                  </div>
              </div>
                    
                 
                )
              }
            }/>
                        
            <Route path="/CateringOrder"  exact render={
              ()=> {
                return(<CateringOrder/>)
              }
            }/>

            <Route path="/Register"  exact render={
              ()=> {
                return(<Register/>)
              }
            }/>

            <Route path="/AboutMe"  exact render={
              ()=> {
                return(<AboutMe/>)
              }
            }/>
            
            <Footer/>   

      </div>
      </Router>
    );
  }
}

export default App;
