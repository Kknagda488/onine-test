
import { Route, Routes } from 'react-router-dom'

import Cart from './Cart'
import Header from './Header'
import Store from './Store'
const Navbar = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Store />} />
                <Route path='/cart' element={<Cart />} />

            </Routes>
        </div>
    )
}

export default Navbar