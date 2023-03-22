import { NavLink } from "react-router-dom";
import Cart from "./Cart";

const Navbar = ({totalItems}) => {
    return (
        <div className="navbar">
            <NavLink to="/">Home </NavLink>
            <NavLink to="about"> About Us</NavLink>
            <NavLink to="cart">Cart<Cart totalItems={totalItems} /></NavLink>
        </div>

    )
};

export default Navbar;


