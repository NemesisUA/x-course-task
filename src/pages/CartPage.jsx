import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hook/useCart";
import { CartItem } from "../components/CartItem";
import '../assets/CartPage.css';
import { LocalStorageService, LS_KEYS } from "../services/localStorage";

export function CartPage() {
    const { cartItems, setCartItems } = useCart();
    const purchasePrice = [...cartItems].reduce((acc, cur) => { return acc + +cur.totalPrice}, 0 ).toFixed(2);
    
    const navigate = useNavigate();

    const handlePurchase = (e) => {
      e.preventDefault();
      setCartItems(() => []);
      LocalStorageService.remove(LS_KEYS.CART);
      navigate('/emptyCart', {replace: true});
    }

    return (
      <div className="wrapper cart-wrapper">        
        <form onSubmit={handlePurchase}>
          <button type="submit">Purchase</button>
          <ul className="cart-container">{
            cartItems.map(item => (
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