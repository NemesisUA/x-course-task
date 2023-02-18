import { Link } from 'react-router-dom';

export function Notfoundpage() {
    return (
        <>
            <h2>404</h2>
            <p>Oops, something went wrong. 404 error</p>
            <Link to="/"><button>go home</button></Link>            
        </>
    )
}