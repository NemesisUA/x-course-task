import { useState, useEffect } from 'react';
import { useCart } from '../hook/useCart';
import { LocalStorageService, LS_KEYS } from '../services/localStorage';

const FormAddToCart = ({ id, book, price }) => {
    const { addToCart, removeFromCart, updateTotalAndAmount } = useCart();

    const storageAmount = LocalStorageService.get(LS_KEYS.CART.amount) ?
        [...LocalStorageService.get(LS_KEYS.CART)]
            .filter(el => el.id === +id)
            .map(el => el.amount)[0] 
        : 0;

    const [amount, setAmount] = useState(storageAmount || 1);        

    const [totalPrice, setTotalPrice]  = useState(amount * price);
    
   
    const handleAmountChange = (e) => { 
        const newAmount = e.target.value;
        const amountDigitsOmly = newAmount.replace(/[^0-9]/g, '');
        const amountValidRange = validateAmaunt(amountDigitsOmly);
        setAmount(amountValidRange);
    }

    function validateAmaunt(value) {
        if (value < 1) {
          value = 1;
        }
        if (value > 42) {
          value = 42;
        }
        return value;
      }

    useEffect(() => {
        setTotalPrice((amount * price).toFixed(2))
    }, [amount, price])


    const handleSpinClick = (e) => {
        const spinValue = e.target.dataset.add;
        const updatedAmount = validateAmaunt(amount + +spinValue);
        setAmount(updatedAmount);
    }

    const handleSubmit = (e) => { 
        e.preventDefault();                  
    }

    const handleAddToCart = () => {
        removeFromCart(id); // clear stored amount   

        addToCart({
            id: book.id,
            amount: amount,
            totalPrice: totalPrice
        }); // set new amount        
    }

    return (
        <form onSubmit={handleSubmit} data-testid="formAddToCart"
            className="book__buy" name="book-order">
            <table>
                <tbody>
                    <tr>
                        <th>Price, $</th>
                        <td id="book-price">{price}</td>
                    </tr>
                    <tr>
                        <th>Count</th>
                        <td>
                            <label id="controls-container" className="controls-container">
                                <input value={amount} onChange={handleAmountChange}
                                    data-testid="amount"
                                    className="amount" id="amount" type="text" />
                                <div className="controls-box">
                                    <div onClick={handleSpinClick}
                                        data-testid="spinEncrease" 
                                        className="control" data-add="1">{'\u25b2'}</div>
                                    <div onClick={handleSpinClick}
                                        data-testid="spinDecrease" 
                                        className="control" data-add="-1">{'\u25bc'}</div>
                                </div>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <th>Total price</th>
                        <td 
                            data-testid="total-price" id="total-price">
                            {totalPrice}
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleAddToCart}
                type="submit" className="buy-book-btn">Add to cart</button>
        </form>
    )
}

export { FormAddToCart }