import { useRef, useState } from "react";
import { useGlobalCartContext } from "../../store/cart-context";

const MealItemForm = ({onAddToCart, id}) => {
    
    const amountRef = useRef()
    const [amountIsValid, setAmountIsValid] = useState(true)
  
    const submitHandler = (e) => {
      e.preventDefault()
      const enteredAmount = amountRef.current.value
      const enteredAmountNum = +enteredAmount
  
      if(enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 10){
        setAmountIsValid(false)
        return
      }
      onAddToCart(enteredAmountNum)
    }
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input">
        <label htmlFor="amount">Amount</label>
        <input
          ref={amountRef}
          type="number"
          id={`amount_${id}`}
          min="1"
          max="10"
          step="1"
          defaultValue="1"
        />
      </div>
      <button>+ Add</button>
      {!amountIsValid && <p>please enter a valid amount (1-10)</p>}
    </form>
  );
};
export default MealItemForm;
