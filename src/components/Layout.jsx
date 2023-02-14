import { Outlet, Link } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';

const Layout = () => {
    return (
        <>
            <Header></Header>

            <main>
                <div className="wrapper">
                    <Outlet></Outlet>
                </div>
            </main>

            <Footer></Footer>
        </>
    )
}

export { Layout }