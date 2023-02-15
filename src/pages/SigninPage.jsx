import '../assets/Signin.css';
import avatar from '../assets/images/icons/avatar3.svg';
import { useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const SigninPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {signin} = useAuth();
    const [disabled, setDisabled] = useState(true);

    const fromPage = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = form.userName.value;       
        signin(user, () => navigate(fromPage, {replace: true}));        
    }

    const checkLength = (e) => {
        const user = e.target.value;        
        if (user.length >= 4 && user.length < 17) {
            setDisabled(false);            
        } else {
            setDisabled(true);
        }
    }

    return (
        <>
            <div className="login">
                <div className="login__avatar">
                    <img className="login__img" src={avatar} alt="avatar" />
                </div>
                <h3 className="login__heading">Username</h3>

                <form onSubmit={handleLogin} autoComplete="off">
                    <input 
                        name="userName" 
                        className="login__username-input" 
                        type="text"
                        onChange={checkLength} />
                    <button                        
                        className="login__submit" 
                        type="submit" 
                        disabled={disabled}>Sign-in</button>
                </form>
            </div>
        </>
    )
}

export { SigninPage }