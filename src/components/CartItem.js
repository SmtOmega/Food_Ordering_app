const CartItem = ({name, price, amount, onAdd, onRemove}) => {
    
    return <li className="cartItem">
        <div>
            <h2>{name}</h2>
            <div className="cartItem__summary">
                <span className="cartItem__price">{price.toFixed(2)}</span>
                <span className="cartItem__amount">x{amount}</span>
            </div>
        </div>
        <div className="cartItem__actions">
            <button onClick={onRemove}>-</button>
            <button onClick={onAdd}>+</button>
        </div>
    </li>
}

export default CartItem