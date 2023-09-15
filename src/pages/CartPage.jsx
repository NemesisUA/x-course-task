import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hook/useCart";
import { CartItem } from "../components/CartItem";
import '../assets/CartPage.css';
import { LocalStorageService, LS_KEYS } from "../services/localStorage";

export function CartPage() {
    const navigate = useNavigate();

    const { cartState, clearCart } = useCart();
    const purchasePrice = cartState.total;
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
      const isCartEmpty = [...cartState.cartItems].map(item => item.amount)
          .reduce((a, b)=>  a + b, 0) ? false : true;
      setIsDisabled(() => (isCartEmpty))                                
    }, [cartState.cartItems])
    

    const handlePurchase = (e) => {
      e.preventDefault();
      clearCart();      
      navigate('/emptyCart', {replace: true});
    }

    return (
      <div className="wrapper cart-wrapper">        
        <form onSubmit={handlePurchase}>
          <button type="submit" disabled={isDisabled}>Purchase</button>
          <ul className="cart-container">{
            cartState.cartItems.map(item => (
              <li key={item.id}>
                <CartItem id={item.id} amount={item.amount} totalPrice={item.totalPrice} />
              </li>
            ))
          }
          </ul>          
          <h2 className="toggle">Total price, $ <span className="total-price">{purchasePrice}</span></h2> 
        </form>
      </div>
    )
}