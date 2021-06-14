import mealsImage from '../assets/meals.jpg'

import CartButtons from './CartButtons'

const Header = ({onShowCart}) => {
    
    return <>
        <header className="header">
            <h1>MealsX</h1>
            <CartButtons onShowCart={onShowCart}/>
        </header>
        <div className="main-image">
            <img src={mealsImage} alt="Your favorite meals"/>
        </div>
    </>
}

export default Header