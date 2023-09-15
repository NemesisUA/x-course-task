import { createContext,useReducer,useState } from "react";
import { LocalStorageService, LS_KEYS  } from "../services/localStorage";
import cartReducer, { cartInitial } from "../features/cartReducer";

export const CartContext = createContext(cartInitial);

export const CartProvider = ({ children }) => {

    const [cartState, dispatch] = useReducer( cartReducer, cartInitial);

    const addToCart = (item) => {
        const updatedCartItems = [...cartState.cartItems, item];        
       
        LocalStorageService.set(LS_KEYS.CART,
            {...cartState,
             cartItems: updatedCartItems
            })
        
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                cartItems: updatedCartItems
            }
        });
        
        updateTotalAndAmount();
    }

    const removeFromCart = (id) => {
        const updatedCartItems = [...cartState.cartItems].filter(cartItem => 
            cartItem.id !== +id);
        
        LocalStorageService.set(LS_KEYS.CART,
            {...cartState,
             cartItems: updatedCartItems
            })


        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                cartItems: updatedCartItems
            }
        })
        
        updateTotalAndAmount();
    }

    const clearCart = () => {
        LocalStorageService.remove(LS_KEYS.CART);
        dispatch({
            type: "CLEAR_CART",
            payload: {}
        })
    }

    const updateTotalAndAmount = () => {
        let newTotal = 0;
        let newAmount = 0;
        cartState.cartItems.forEach(item => { 
            newTotal += +item.totalPrice;
            newAmount += +item.amount;
        });        

        LocalStorageService.set(LS_KEYS.CART,
            {...cartState,
             total: newTotal.toFixed(2),
             amount: newAmount
            })

        dispatch({
            type: "UPDATE_TOTAL_AND_AMOUNT",
            payload: {
                total: newTotal.toFixed(2),
                amount: newAmount
            }
        })       
    }

    const value = {cartState, addToCart, removeFromCart, clearCart, updateTotalAndAmount} ;    
    
    return (
        <CartContext.Provider value={value}>
            { children }
        </CartContext.Provider>
    )
}