import '../assets/Button.css';

const Button = (props) => {
    const callback = props.onClick;
    
    return (
        <button onClick={callback}>{props.children}</button>
    )
}

export default Button;