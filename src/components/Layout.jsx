import { Outlet, Link } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';

const Layout = () => {
    return (
        <>
            <Header></Header>

            <main>                
                <Outlet></Outlet>                
            </main>

            <Footer></Footer>
        </>
    )
}

export { Layout }