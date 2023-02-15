import { Link } from 'react-router-dom';

export function Notfoundpage() {
    return (
        <>
            <h2>404</h2>
            <p>Oops, there is no such a book or page.</p>
            <Link to="/"><button>go home</button></Link>            
        </>
    )
}