import React, { Component } from 'react';
import PomoRice from './images/pomo-rice.png';

class RecipeSumamry extends Component {

    render() {

        return (

            <div className="col-sm-3 m-*-5">
                <img src={PomoRice} className="img-rounded recipe-summary-image"/>
                <div>
                    <h5>This is the recipe of pomo rice</h5>
                </div>

            </div>

        );
    }

}

export default RecipeSumamry;