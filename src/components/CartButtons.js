import {FaCartPlus} from 'react-icons/fa'
import { useGlobalCartContext } from '../store/cart-context';

const CartButtons = ({onShowCart}) => {
  const {items} = useGlobalCartContext()
  const total = items.reduce((acc, item) => {
    return acc += item.amount
  }, 0)
  return (
    <button className="btn" onClick={onShowCart}>
      <span className="icon">{<FaCartPlus />}</span>
      <span>Your Cart</span>
      <span className="badge">{total}</span>
    </button>
  );
};


export default CartButtons