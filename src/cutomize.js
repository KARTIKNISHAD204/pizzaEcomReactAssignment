import React,{Component} from 'react';
import Cart from './cart'
import './index.css'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  BrowserRouter
} from "react-router-dom";
import Cheese from "./assets/BaseCheese.png";
import Classic from "./assets/PizzaBase.png";
import PanBased1 from "./assets/panbased1.png";
import Corn from "./assets/Pineapple.png";
import Paneer from "./assets/Mushroom.png";
import Capsicum from "./assets/Basil.png";
import HandTossed from "./assets/handtossed.png";
import {motion} from 'framer-motion';





class Pizzamaker extends Component {
    constructor(props) {
        super(props);
        
         
        
         this.state={
                 toppings:'Paneer',
                crust : 'Normal',
                type : 'Classic' ,
                total : 0,
                Quantity : 1,
                Amount : 0,
                finalpizza : []
         }
    }


      gettopping = (name)=>{
        let price =0;
     if (name === "Paneer"){
         price = 50;
         return  price ;
     }
     if (name === "Corn"){
        price = 20;
        return price ;
    }
    if (name === "Capsicum"){
        price = 30;
        return price ;
    }
    
    
    }
    
     getcrust = (name)=>{
        let price =0;
     if (name === "Hand-Tossed"){
         price = 80;
         return price ;
     }
     if (name === "Normal"){
        price = 70;
        return  price ;
    }
    if (name === "CheeseBurst"){
        price = 100;
        return  price ;
    }
    
    
    }
    getpizza  = (name)=>{
        let price =0;
     if (name === "PanBase"){
         price = 20;
         return price ;
     }
     if (name === "Classic"){
        price = 30;
        return price ;
    }
     
    }



 
    
      handletopping=(e)=>{
        this.setState({toppings:e.target.value});
         } 
        handlecrust=(e)=>{
         
            this.setState({crust:e.target.value});
           } 
            handletype=(e)=>{
             
                this.setState({type:e.target.value}); } 
                totalchange=(total)=>{
             
                    this.setState({total:total}); } 
                    incquant=()=>{
             
                      this.setState({Quantity:this.state.Quantity + 1}); 
                        const total = this.gettopping(this.state.toppings) + this.getcrust(this.state.crust) + this.getpizza(this.state.type);
                        const newtotal = total*(this.state.Quantity + 1);
                        this.totalchange(newtotal)
                        

                      } 
                        decquant=()=>{
             
                            this.setState({Quantity:this.state.Quantity-1}); 
                            const total = this.gettopping(this.state.toppings) + this.getcrust(this.state.crust) + this.getpizza(this.state.type);
                            const newtotal = total*(this.state.Quantity - 1);
                            this.totalchange(newtotal)
                         
                          } 
                          sendtocart = ()=>{

                            const total = this.gettopping(this.state.toppings) + this.getcrust(this.state.crust) + this.getpizza(this.state.type);
                            const pizza = {"toppings":this.state.toppings,
                            "crust"  : this.state.crust,
                            "type" : this.state.type,
                            "Quantity" : this.state.Quantity,
                            "total" : total*this.state.Quantity,

                            
                        }
                            
                            this.totalchange(total);
                            this.setState({Amount:this.state.Amount + (pizza.total)}); 
                            this.state.finalpizza.push(pizza)
                            
                          
                                       
                
                        }
        
    


               

         

        render () {

     
           const pizzas = {"toppings":this.state.toppings,
            "crust"  : this.state.crust,
            "type" : this.state.type,
            "Amount" : this.state.total*this.state.Quantity,
            "Quantity" : this.state.Quantity
        } ;
            return (
              <div  style ={{display:"flex"}}>
              <div style={{border: "2px solid black" ,flex: 1} }>
              <div style = {{maxHeight:500, maxWidth:500 ,position : "relative"}}>
          
           <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: this.state.toppings==="Capsicum"? 100 : -100,
              opacity:this.state.toppings==="Capsicum"? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Capsicum} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
      
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: this.state.toppings==="Corn" ? 100 : -100,
              opacity: this.state.toppings==="Corn" ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Corn} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y:this.state.crust==="Hand-Tossed" ? 100 : -100,
              opacity: this.state.crust==="Hand-Tossed" ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z2"
          >
            <img src={HandTossed} alt="Hand-Tossed" height="100%" width="100%" />
          </motion.div> 
          <motion.div
            initial={{ scale: 0 }}
            animate={{
           //  y: this.state.crusts==="CheeseBurst" ? 100 : -100,
          //  opacity: this.state.crusts==="CheeseBurst"  ? 1 : 0,
              scale: this.state.crust==="CheeseBurst"  ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="cheese z1"
          >
            <img src={Cheese} alt="Cheese" height="100%" width="100%" />
          </motion.div>
                
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: this.state.toppings ==="Paneer"? 100 : -100,
              opacity:  this.state.toppings==="Paneer" ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            className="ingredients z4"
          >
            <img src={Paneer} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{
            y: this.state.type ==="PanBase"? 100 : -100,
            opacity:  this.state.type==="PanBase" ? 1 : 0,
          }}
         
            transition={{ duration: 1 }}
            className="ingredients z1"
          >
            <img src={PanBased1} alt="Pizza Base" height="100%" width="100%" />
          </motion.div> 
          <motion.div transition={{ duration: 1 }} className="">
            <img src={Classic} alt="Pizza Base" height="100%" width="100%" />
          </motion.div>
         
           </div>


              </div>
              <div  style={{border: "2px solid black" ,flex: 1} }>
              <select 
                value={this.value} 
                onChange={this.handletopping} 
              >
               <option value="Paneer">Paneer</option>
                <option value="Corn">Corn</option>
                <option value="Capsicum">Capsicum</option>
              </select>
        
              <select 
                value={this.value} 
                onChange={this.handlecrust} 
              >
                <option value="Normal">Normal</option>
               <option value="Hand-Tossed">Hand-Tossed</option>                
                <option value="CheeseBurst">CheeseBurst</option>
              </select>
              <select 
                value={this.value} 
                onChange={this.handletype} 
              >
                <option value="Classic">Classic</option>
               <option value="PanBase">PanBase</option>
                
              </select>
            <button  onClick = {this.incquant}   > + </button>
             <span>{this.state.Quantity}
                 </span>
            <button  onClick = {this.decquant}   > - </button>
              
            <button  onClick = {this.sendtocart}> Add To Cart </button>  
            <h3> Your Selected Pizza </h3>
            <div>
                              {
                                this.state.finalpizza.map((item,index)=>(
                                  <div>
                                  <div  key = {index}>  
                                   <span><span> Topping : </span>{item.toppings}<span>| </span></span>
                                   <span><span> Crust : </span>{item.crust}<span>| </span></span>
                                   <span><span> Pizza Type : </span>{item.type}<span>|</span></span>
                                   <span><span> Quantity : </span>{item.Quantity}<span>| </span></span>
                                   <span><span> Total : </span>{item.total}<span>|</span></span>
                                
                                 </div>
                  
                                  </div>
                                ))
                              }
                             
                            
                               </div>        
                
            
            <div>

                            <h3> Your Total Amount is - {this.state.Amount}</h3>

          

            <div>
                     
           <Link to={{ pathname: '/cart', Amount : this.state.Amount , newpizza :this.state.finalpizza}}><button>Proceed to Pay </button></Link>
         
            </div>


         </div>
        

              </div>   
              </div>
              
            );
          }
}

Pizzamaker.propTypes = {
 
};

export default Pizzamaker ;