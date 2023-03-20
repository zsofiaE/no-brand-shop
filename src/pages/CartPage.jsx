import { Link } from "react-router-dom";

const Cart = ({cartItems, removeItem}) => {
    return (
    <div className="cart-container-new">
      {cartItems.length < 1 ? (
        <div>
          your basket is empty, go an fill it <Link to="/">here</Link>
        </div>
      )
        :
        (
        cartItems.map((cartItem) => (
        
        <div className="cart-item">
          <img 
            className="cart-img"
            src={window.location.origin + cartItem.imageSrc} 
            alt={cartItem.name}
            />
          <div className="product-info">
            <h4>{cartItem.name}</h4>
            {/* <h4>cartItem.quantity</h4> */}
            <h4>{cartItem.price}</h4>
            <button onClick={()=>removeItem(cartItem.id)} >remove</button>
          </div>
          
        </div>
        ))
         )}
    </div>
   
    );
};

export default Cart;