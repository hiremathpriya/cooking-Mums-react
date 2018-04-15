import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'


class CateringOrder extends Component {

        constructor(props) {
          super(props);
          this.state = {value: ''};
      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleChange(event) {
          this.setState({value: event.target.value});
        }
      
        handleSubmit(event) {
          alert('A name was submitted: ' + this.state.value);
          event.preventDefault();
        }
      
        render() {
          return (
            
            <div>
                <Header title="Cooking Mums"/>
                <form onSubmit={this.handleSubmit}>
                <h2>Catering Order Form</h2>
                <div class="form">
                <div class="container">
                    <div>
                    <label id="label" class="customer-label">
                        Name:
                        </label>  
                        <input class="text"type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                
                
                <div>
                    <label class="customer-label">
                    Date of pick-up:
                    </label>
                    <input class="text" type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label class="customer-label">
                        Phone number:
                        </label>
                        <input class="text"type="text" value= {this.state.value} onChange={this.handleChange} />
                        </div>
                        <div>
                        <label class="customer-label">    
                        Number of guests:
                        </label>
                        <input  class="text"type="text" value= {this.state.value} onChange={this.handleChange} />
                        </div>
                        <div>

                        <label class="customer-label">      
                        Pick up time:
                        </label>
                        <input class="text" type="text" value= {this.state.value} onChange={this.handleChange} />
                        </div>
                </div>

                <div class="orderInfo">          

                        <h3>Place your order</h3>

                        <div class="order-header">  
                        <h5 >Item</h5>
                        </div>
                        <div class="order-header">
                            <h5>Quantity</h5>
                        </div>    
                        <div>
                        <label class="order-label">
                        Goan fish curry with rice:                       
                        </label>
                        <input class="text"type="text" value= {this.state.value} onChange={this.handleChange} />
                        </div>
                        <div>
                        <label class="order-label">
                        Lamb curry with saffron rice:                      
                        </label>
                        <input class="text"type="text" value= {this.state.value} onChange={this.handleChange} />
                        </div>
                        <div>
                        <label class="order-label">
                        Chicken makhani with cumin rice:                      
                        </label>
                        <input class="text"type="text" value= {this.state.value} onChange={this.handleChange} />
                        </div>
                        <div>
                        <label class="order-label">
                        Chicken with tangy button onions with rice:
                        
                        </label>
                        <input class="text"type="text" value= {this.state.value} onChange={this.handleChange} />
                        </div>
                        <div>
                        <label class="order-label">
                        Chickpea curry with cumin rice:                      
                        </label>
                        <input class="text"type="text" value= {this.state.value} onChange={this.handleChange} />
                        </div>
                </div>         


                    <input class="submit" type="submit" value="Submit" />
                    </div>  
                </form>
            </div>    
            
          );
        }
      }
      

  


export default CateringOrder;
