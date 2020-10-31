import React from 'react';
import Pizzamaker from './cutomize'
import Cart from './cart'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (

   
      <div className="App">
       
        
     <Router>
       
        <Route exact path="/" exact component = {Pizzamaker}>
          </Route>
          <Route exact path="/cart"  component = {Cart}/>
          
          </Router> 

      </div>
   
    
  );
}

export default App;