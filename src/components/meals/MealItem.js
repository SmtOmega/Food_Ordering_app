import { useGlobalCartContext } from "../../store/cart-context";
import MealItemForm from "./MealItemForm";

const MealItem = ({ id, name, price, description }) => {
    const {addItem} = useGlobalCartContext()
    const addToCart = (val) => {
     addItem({
         id,
         name,
         price,
         amount: val
     })   
    }
  return (
    <li key={id} className="meal_item">
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCart} id={id}/>
      </div>
    </li>
  );
};

export default MealItem;
