import { useState } from "react";
import { useGlobalCartContext } from "../store/cart-context";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";
import Modal from "./Modal";

const Cart = ({ onClose }) => {
  const { items, total, addItem, removeItem, clearCart } = useGlobalCartContext();
  const [isCheckOut, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const hasItems = items.length > 0;
  const totalAmount = `$${total.toFixed(2)}`;

  const addItemToCart = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const onRemoveItem = (id) => {
    removeItem(id);
  };
  const handleOrder = () => {
    setIsCheckout(true);
  };

  const HandleOrderSubmit = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://meals-ordering-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItem: items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    clearCart()
  };

  const cartContentDisplay = (
    <>
      <ul className="cart-items">
        {items.map((item) => {
          return (
            <CartItem
              key={item.id}
              {...item}
              onAdd={addItemToCart.bind(null, item)}
              onRemove={onRemoveItem.bind(null, item.id)}
            />
          );
        })}
      </ul>
      <div className="total">
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckOut && (
        <CheckOut onConfirm={HandleOrderSubmit} onCancle={onClose} />
      )}
      {!isCheckOut && (
        <div className="actions">
          <button className="btn-close" onClick={onClose}>
            Close
          </button>
          {hasItems && (
            <button className="btn-order" onClick={handleOrder}>
              Order
            </button>
          )}
        </div>
      )}
    </>
  );

const submittingData = <p>Sending cart and user data...</p>
const dataSubmitted = <>
  <p>Successfully submitted the Data...</p>
  <div className="actions">
          <button className="btn-close" onClick={onClose}>
            Close
          </button>
        </div>
</>

  return <Modal onClose={onClose}>
    {!isSubmitting && !didSubmit && cartContentDisplay}
    {isSubmitting && submittingData}
    {didSubmit && dataSubmitted}
  </Modal>;
};

export default Cart;
