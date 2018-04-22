import React, { Component } from 'react';
import CoverFlow from 'coverflow-react';
//import './App.css';
import Header from './Components/Header';

import CateringOrder from './Components/CateringOrder';
import Message from './Components/Message';
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
  'images/0005.jpg'
];

class App extends Component {
  render() {

    console.log('images ' + imagesArr);

    return (
      <Router>
      <div className="App">
        <Header title="Cooking Mums"/>
        <CoverFlow width={1200} background="white" imagesArr={imagesArr} />

            <Route path="/" exact render={
              ()=> {
                return(
                  <div>
                    
                    <div className="row center-block">
                      
                    </div>
                    <Message/>
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
