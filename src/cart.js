import React, { Component } from 'react';
import PropTypes from 'prop-types';

class cart extends React.Component {
  constructor(props) {
    super(props);

  this.state={
     pizzalist : this.props.location.newpizza ,
     amount : this.props.location.Amount

  }}

   
  removeItem =(index ,total)=>{
    const list = this.props.location.newpizza;
    this.setState({amount:this.state.amount-total})
    list.splice(index, 1);
    this.setState({pizzalist : list});

  }
 
 
  render() {
    const pizza = this.props.location;

  

    return (
      <div>
         <h3> Your Selected Pizza </h3>
           <div>
                             {
                               pizza.newpizza.map((item,index)=>(
                                 <div>
                                 <div  key = {index}>  
                                 <span><span> index : </span>{index}<span>| </span></span>
                                  <span><span> Topping : </span>{item.toppings}<span>| </span></span>
                                  <span><span> Crust : </span>{item.crust}<span>| </span></span>
                                  <span><span> Pizza Type : </span>{item.type}<span>|</span></span>
                                  <span><span> Quantity : </span>{item.Quantity}<span>| </span></span>
                                  <span><span> Total : </span>{item.total}<span>|</span></span>
                                  <button  onClick={() => this.removeItem(index,item.total)} > X </button>
                                 
                                  
                                </div>
                                
                                
                                 </div>
                                 
                               )
 
                               
                               )
                             }
                            
                            
                           
                              </div> 
                              <h3> Your Total Amount </h3>
                              
                              <span> {this.state.amount}  </span>

                              <button  className = "Payment" > Confirm Payment</button >
                        
      </div>
    );
  }
}

cart.propTypes = {

};

export default cart;



