import '../assets/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';
import Button from './Button';

const Header = () => {
    const navigate = useNavigate();
    const {user, signout} = useAuth();

    const handleSignout = () => {        
        signout(() => {
            localStorage.removeItem('user');
            localStorage.clear();
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
                            <div className="cart-block__cart"></div>                    
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