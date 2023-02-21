import '../assets/SpecificBookPage.css';
import imgNotFound from '../assets/images/imageNotFound.png'
import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BooksListContext } from "../hoc/BooksListProvider";

const SpecificBookPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log('id', id)
    const book = useContext(BooksListContext)[id - 1] || null;
    console.log('book', book)

    const [amount, setAmount] = useState(1);
    const [totalPrice, setTotalPrice]  = useState(amount * book.price)   


    useEffect(() => {
        if (!Number.isInteger(+id)) {
            return navigate('/*', { replace: true });
        }
    }, [id]);  
    
    const handleAmountChange = (e) => { 
        const newAmount = e.target.value;
        const amountDigitsOmly = newAmount.replace(/[^0-9]/g, '');
        const amountValidRange = validateAmaunt(amountDigitsOmly);
        setAmount(amountValidRange);
    }

    function validateAmaunt(value) {
        if (value < 1) {
          value = 1;
        };
        if (value > 42) {
          value = 42;
        };
        return value;
      }

    useEffect(() => {
        setTotalPrice(amount * book.price)
    }, [amount])

    const handleSpinClick = (e) => {
        const spinValue = e.target.dataset.add;
        const updatedAmount = validateAmaunt(amount + +spinValue);
        setAmount(updatedAmount);
    }

    return (
        <>
            {!book && (
                <>
                    <h3>Oops, there is no such a book.</h3>
                    <Link to="/"><button>go home</button></Link>
                </>
            )}
            {book && (
                <section className="book">
                    <div className="wrapper">
                        <div className="book-wrapper">
                            <div className="book__card">
                                <div className="book__image">
                                    <img src={ book.image || imgNotFound } alt="book" width="250" />
                                </div>
                                <div className="book__props">
                                    <span className="bold">Book name:</span>
                                    <p>{book.title}</p>
                                    <span className="bold">Book author:</span>
                                    <p>{book.author}</p>
                                    <span className="bold">Book level:</span>
                                    <p>Beginner</p>
                                    <span className="bold">Book tags:</span>
                                    <p>lorem, ipsum, lorem</p>
                                </div>
                            </div>
                            <form className="book__buy" name="book-order">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Price, $</th>
                                            <td id="book-price">{book.price}</td>
                                        </tr>
                                        <tr>
                                            <th>Count</th>
                                            <td>
                                                <label id="controls-container" className="controls-container">                                                    
                                                    <input value={amount} onChange={handleAmountChange}
                                                        className="amount" id="amount" type="text" />
                                                    <div className="controls-box">
                                                        <div onClick={handleSpinClick} 
                                                            className="control" data-add="1">{'\u25b2'}</div>
                                                        <div onClick={handleSpinClick} 
                                                        className="control" data-add="-1">{'\u25bc'}</div>
                                                    </div>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Total price</th>
                                            <td id="total-price">{totalPrice}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="buy-book-btn">Add to cart</button>
                            </form>
                        </div>
                        <span className="bold">Book description:</span>
                        <p>{book.description}</p>
                    </div>
                </section>
            )}
        </>
    )
}

export { SpecificBookPage }