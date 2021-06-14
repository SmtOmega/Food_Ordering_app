import { useGlobalCartContext } from "../store/cart-context";
import CartItem from "./CartItem";
import Modal from "./Modal";

const Cart = ({onClose}) => {
  const{items, total, addItem, removeItem} = useGlobalCartContext()
  const hasItems = items.length > 0
  const totalAmount = `$${total.toFixed(2)}`

  const addItemToCart = (item) => {
    addItem({...item, amount: 1})
  }

  const onRemoveItem = (id) => {
    removeItem(id)
  }

  return (
    <Modal onClose={onClose}>

      <ul className="cart-items">
        {items.map((item) => {
          return <CartItem key={item.id} {...item} onAdd={addItemToCart.bind(null, item)} onRemove={onRemoveItem.bind(null, item.id)}/>;
        })}
      </ul>
      <div className="total">
          <span>Total amount</span>
          <span>{totalAmount}</span>
      </div>
      <div className="actions">
          <button className="btn-close" onClick={onClose}>Close</button>
         {hasItems && <button className="btn-order">Order</button>}
      </div>
    </Modal>
    
  );
};


export default Cart