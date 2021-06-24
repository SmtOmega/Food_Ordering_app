import { useRef, useState } from "react";

const isEmpty = (val) => val.trim() === "";
const hasFiveChar = (val) => val.trim().length === 5;

const CheckOut = (props) => {
  const [inputIsValid, setInputIsValid] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nameisValid = !isEmpty(nameRef.current.value);
    const streetIsValid = !isEmpty(streetRef.current.value);
    const cityIsValid = !isEmpty(cityRef.current.value);
    const postHasFiveChar = hasFiveChar(postalRef.current.value);

    setInputIsValid({
        name: nameisValid,
        street: streetIsValid,
        city: cityIsValid,
        postal: postHasFiveChar,
      });

    const formIsValid =
      nameisValid && streetIsValid && cityIsValid && postHasFiveChar;
    if (!formIsValid) {
        return
    }
    props.onConfirm({
        name: nameRef.current.value,
        street: streetRef.current.value,
        postal: postalRef.current.value,
        city: cityRef.current.value
    })
  };

  return (
    <form className="checkout-form" onSubmit={handleFormSubmit}>
      <div
        className={`checkout-form-control ${
          !inputIsValid.name ? "invalid" : ""
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!inputIsValid.name && <p>Please enter a valid name</p>}
      </div>
      <div
        className={`checkout-form-control ${
          !inputIsValid.street ? "invalid" : ""
        }`}
      >
        <label htmlFor="street">Your Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!inputIsValid.street && <p>Please enter a valid street address</p>}
      </div>
      <div
        className={`checkout-form-control ${
          !inputIsValid.postal ? "invalid" : ""
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!inputIsValid.postal && <p>Your postal address must be of length 5</p>}
      </div>
      <div
        className={`checkout-form-control ${
          !inputIsValid.city ? "invalid" : ""
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!inputIsValid.city && <p>Please enter a valid city name</p>}
      </div>
      <div className="checkout-action">
        <button type="button" onClick={props.onCancle}>
          Cancel
        </button>
        <button className="submit">Confirm Order</button>
      </div>
    </form>
  );
};

export default CheckOut;
