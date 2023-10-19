

import { NavLink } from 'react-router-dom'
import "../styles/Navbar.css"
import { useSelector } from 'react-redux'
const Header = () => {
    const items = useSelector((state) => state.cart.cart)
    return (
        <div className='left'>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/cart">cart</NavLink></li>
                    <li>card item: {items.length}</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header