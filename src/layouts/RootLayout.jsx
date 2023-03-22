import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import { Link, NavLink, Outlet } from  'react-router-dom';

const RootLayout = ({totalItems}) => {
    return(
    <div className="app">
        <nav>
            <Link to="/"><h1 className="logo">illustratory</h1></Link>
            <Navbar totalItems={totalItems}/>
        </nav>
        <Outlet />
    </div>
    );
};

export default RootLayout;