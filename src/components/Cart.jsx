const Cart = ({count}) => {
    return (
        <div className="cart-container">
            <h3 className="cart"><span class="material-symbols-outlined">
shopping_cart
</span>
                <div className="cart-items">{count}</div>
            </h3>
         </div>
    )
}

export default Cart;