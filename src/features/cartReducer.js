import { LocalStorageService, LS_KEYS } from "../services/localStorage";

export const cartInitial = {
    total: LocalStorageService.get(LS_KEYS.CART)?.total || 0,
    amount: LocalStorageService.get(LS_KEYS.CART)?.amount || 0,
    cartItems: [...LocalStorageService.get(LS_KEYS.CART)?.cartItems || []]
};

LocalStorageService.set(LS_KEYS.CART, cartInitial);

console.log('cartInitial', cartInitial)
export const cartReducer = (cartState, action) => {
    const {type, payload} = action;

    switch (type) {

        case "ADD_TO_CART":
            return {...cartState,
                    cartItems: payload.cartItems
                };
        
        case "REMOVE_FROM_CART":
            return {...cartState,
                    cartItems: payload.cartItems
                };
                
        case "CLEAR_CART":
            return {
                total: 0,
                amount: 0,
                cartItems: [] 
            };

        case "UPDATE_TOTAL_AND_AMOUNT":
            return {...cartState,
                total: payload.total,
                amount: payload.amount
            };
            
        default: 
            throw new Error(`no case for type ${type} found in cartReducer`)
    }

}

export default cartReducer;
