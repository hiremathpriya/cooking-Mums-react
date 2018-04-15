import React, { Component } from 'react';
import pots from './pots.jpg';

class RollingImages extends Component {
  render() {
    return (
      <div className="rolling-images">
        
          <img src={pots} className="pots" alt="rolling" />
          <img src={pots} className="pots" alt="rolling" />
          <img src={pots} className="pots" alt="rolling" />
          <img src={pots} className="pots" alt="rolling" />
          
        
        
      </div>
    );
  }
}

export default RollingImages;