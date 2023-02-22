import { createContext,useState } from "react";
import { LocalStorageService, LS_KEYS  } from "../services/localStorage";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(LocalStorageService.get(LS_KEYS.CART) || []);
    const value = {cartItems, setCartItems};    
    
    return (
        <CartContext.Provider value={value}>
            { children }
        </CartContext.Provider>
    )
}