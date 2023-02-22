import { useContext } from "react";
import { CartContext } from "../hoc/CartProvider";

export const useCart = () => {
    return useContext(CartContext);
}