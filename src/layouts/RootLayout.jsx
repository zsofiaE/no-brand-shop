import Cart from "../components/Cart";
import { Link, NavLink, Outlet } from  'react-router-dom';

const RootLayout = ({totalItems}) => {
    return(
    <div className="app">
        <nav>
            <Link to="/"><h1 className="logo">illustratory</h1></Link>
            <div className="navbar">
                <NavLink to="/">Home </NavLink>
                <NavLink to="about"> About Us</NavLink>
                <NavLink to="cart">Cart<Cart totalItems={totalItems}/></NavLink>
            </div>
        </nav>
        <Outlet />
    </div>
    );
};

export default RootLayout;