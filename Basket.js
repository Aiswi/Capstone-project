import React from 'react'
import { Link } from 'react-router-dom'
import './Basket.css'
import {useEffect, useState} from 'react'

export default function Basket() {

  const [cartItems, setCartItems] = useState([]);

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  const taxPrice = itemsPrice * 0.05;
  
  const totalPrice = itemsPrice + taxPrice ;

  useEffect(() => {
    fetch('http://localhost:3001/cartdata')
    .then(response=>response.json())
    .then(data=>setCartItems(data))
  }, [])

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x     // adding product to cart & increment (+) button
        )
      );
    } 
    else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }
  

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));         // decrement (-) button
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }

  return (
    <div className='container'>

      <aside className="maincart">
      
        <div className='heading'><h2>Cart</h2></div>

          {cartItems.length === 0 && (

            <div className='empty'>

              <p className='p1'>Your Cart is empty !</p>

              <img className='emptyimg' src='https://sethisbakery.com/assets/website/images/empty-cart.png' style={{width:"520px",height:"350px"}}/>
              
              <p className='p2'><Link to="/" >Continue Shopping</Link></p>

            </div>

          )}
          
          {cartItems.map((item) => (

            <div key={item.id} className="mainrow">
              
              <div className="productdetails">
              <img className="mainimg" src={item.src} alt={item.name}  style={{width:"100px", height:"100px"}} />
              <p className="itemname"><b>{item.name}</b><br/><br/>{item.details}</p>
              
              </div>
              <div className="operator">
                <p className='quantity'>Quantity</p>

                <button onClick={() => onRemove(item)} className="incq">
                  -
                </button>

                {' '}

                <p className='quantity1'>{item.qty}</p>

                <button onClick={() => onAdd(item)} className="decq">
                  +
                </button>

                <p className='finalprice'><b>₹ {item.qty*item.price.toFixed(2)}</b></p>
              </div>

            </div>
          ))}
      </aside>
        
            
      <div className='checkout'>

            <div className="row">
              <div className="col-2">Item's Price :</div>
              <div className="col-1 text-right">₹{itemsPrice.toFixed(2)}</div>
            </div><br></br>

            <div className="row">
              <div className="col-2">Tax Price (5%) :</div>
              <div className="col-1 text-right">₹{taxPrice.toFixed(2)}</div>
            </div><hr/>
            
            <div className="row">
              <div className="col-2">
                <strong>Total Price :</strong>
              </div>
              <div className="col-1 text-right">
                <strong>₹{totalPrice.toFixed(2)}</strong>
              </div>
            </div>

            <br/><br/><br/>

            <div className="row">
              <button className='checkoutbutton' onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>

            </div>

        </div>

    </div>
  );
}

const Counter = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/cartdata')
    .then(response=>response.json())
    .then(data=>setCartItems(data))
  }, [])
  let Length = cartItems.length;
  return(
    <div>{Length}</div>
  )
}

export {Counter}
