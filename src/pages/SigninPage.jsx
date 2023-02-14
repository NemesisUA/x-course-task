import '../assets/Signin.css';
import avatar from '../assets/images/icons/avatar3.svg';
import { useLocation, useNavigate} from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const SigninPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {signin} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = form.userName.value;
        signin(user, () => navigate(fromPage, {replace: true}));
    }

    return (
        <>
            <div className="login">
                <div className="login__avatar">
                    <img className="login__img" src={avatar} alt="avatar" />
                </div>
                <h3 className="login__heading">Username</h3>

                <form onSubmit={handleLogin}>
                    <input name="userName" className="login__username-input" type="text" />
                    <button className="login__submit" type="submit">Sign-in</button>
                </form>
            </div>
        </>
    )
}

export { SigninPage }