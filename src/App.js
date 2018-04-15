import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './Header';
import RollingImages from './RollingImages';
import CateringOrder from './CateringOrder';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
import RecipeSumamry from './RecipeSummary';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header"></header>
          
         {/* <RollingImages */}
         {/* <CateringOrder />*/}
           <Route path="/Header" exact strict Component={Header}/>

           <Route path="/" exact render={
            ()=> {
              return(
                <div>
                  <Header title="Cooking Mums"/>
                  <div className="row">
                    <RecipeSumamry />
                    <RecipeSumamry />
                    <RecipeSumamry />
                  </div>
                  
                </div>
              )
            }
            }/>
            
            <Route path="/RollingImages" exact render={
            ()=> {
              return(<RollingImages/>)
            }
            }/>
            <Route path="/CateringOrder"  exact render={
            ()=> {
              return(<CateringOrder/>)
            }
            }/>
      </div>
      </Router>
    );
  }
}

export default App;
