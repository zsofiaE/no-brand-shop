import Cart from "../components/Cart";
import { Link, Outlet } from  'react-router-dom';

const RootLayout = ({count}) => {
    return(
    <div className="header">
        <nav>
            <h1 className="logo">the illustratory</h1>
            
            <navbar>
                <Link to="/">Home </Link>
                <Link to="about"> About Us</Link>
                <Link to="product/1"> go to product 1</Link>
            </navbar>
            <Cart count={count} />
        </nav>
        <Outlet />
    </div>
    );
};

export default RootLayout;