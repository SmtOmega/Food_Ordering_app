export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_CART = "CLEAR_CART"

const cartReducer = (state, action) => {
  if (action.type === ADD_ITEM) {
    let existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.item.id
    );
    let updatedItems;
    const existingCartItem = state.items[existingItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.item.amount,
      };
      updatedItems = [...state.items]
      updatedItems[existingItemIndex] = updatedItem

    }
    else{
      updatedItems = [...state.items, action.payload.item];
    }

    
    const updateTotal =
      state.total + action.payload.item.amount * action.payload.item.price;
    return {
      items: updatedItems,
      total: updateTotal,
    };
  }
  if(action.type === REMOVE_ITEM){
    let existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload
    );

    const existingCartItem = state.items[existingItemIndex]
    let updatedItems;
    if(existingCartItem){
      if(existingCartItem.amount === 1){
        updatedItems = state.items.filter(item => item.id !== action.payload)
      }
      else{
        const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
        updatedItems =[...state.items]
        updatedItems[existingItemIndex] = updatedItem
      }

    }
    const updateTotalAmount = state.total - existingCartItem.price
    return {items: updatedItems, total: updateTotalAmount}
    
  }

  if(action.type === CLEAR_CART){
    return {items: [], total: 0}
  }
  return state;
};

export default cartReducer;
