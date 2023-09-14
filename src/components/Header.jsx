import '../assets/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';
import Button from './Button';
import { useCart } from '../hook/useCart';

const Header = () => {
    const navigate = useNavigate();
    const {user, signout} = useAuth();
    const {cartItems, setCartItems } = useCart([]);

    const booksInCart = cartItems.map(item => item.amount).reduce((a, b)=>  a + b, 0);

    const handleSignout = () => {        
        signout(() => {
            localStorage.removeItem('user');
            localStorage.clear();
            setCartItems([]);
            navigate('/signin', {replace: true})})
    }

    return (
        <header className="header">
        <div className="wrapper header-wrapper">
            <Link to="/">
                <h1>JS BAND STORE </h1>
            </Link>
            <div className="authorisation-wrapper">
                <p className="sub-heading">/ Mezit Tetyana</p>
                { user && 
                    <div className="cart-block">
                        <Link to="cart">
                            <div className="cart-block__cart">
                                {
                                   booksInCart ? <div className="cart-block__items">
                                        {booksInCart}
                                    </div> : ''
                                }
                            </div>                    
                        </Link>
                        <Button onClick={handleSignout} className="cart-block__sign-btn" children="Sign-Out"></Button>
                        <div className="cart-block__user">
                            <div className="cart-block__user-avatar"></div>
                            <span className="cart-block__user-name">{user}</span>
                        </div>
                    </div>
                }               
            </div>            
        </div>
    </header>
    )
}

export default Header;
