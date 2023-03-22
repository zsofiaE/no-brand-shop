const Cart = ({totalItems}) => {
    return (
        <div className="cart-container">
            <h3 className="cart"><span className="material-symbols-outlined">
shopping_cart
</span>
                <div className="cart-items">{totalItems}</div>
            </h3>
         </div>
    )
}

export default Cart;