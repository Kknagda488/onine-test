import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreaseItemQuantity, getCartTotal, increaseItemQuantity, remove } from "../store/cartSlice";
import "../index.css"

const Cart = () => {
    const dispatch = useDispatch();

    const { cart, totalQuantity, totalPrice } = useSelector(
        (state) => state.cart
    );

    const { cartValue } = useSelector(
        (state) => state.cart
    );


    // console.log(cartValue);


    // console.log(totalQuantity);
    // console.log(totalPrice);
    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    const handleInc = (productId) => {
        dispatch(increaseItemQuantity(productId))
    };

    const handleDec = (productId) => {
        dispatch(decreaseItemQuantity(productId))
    };

    const handleClick = () => {
        dispatch(clearCart());
    };

    return (
        <>
            <h1>Cart</h1>
            <div className="cart">
                <pre>
                    <strong>Total amount:  </strong>
                    {console.log(totalPrice)}
                    <span>
                        <b><strong>₹{totalPrice}     </strong>   </b>
                    </span>
                    Total Quantity
                    <span>{totalQuantity}</span>
                </pre>
                {cart.map((product) => (
                    <div className="cartCard" key={product._id}>
                        <img src={product.imageUrl} alt="" />
                        <h4>{product.name}</h4>
                        <h4>₹{product.price}</h4>
                        <button className="bt" onClick={() => handleInc(product._id)}>
                            +
                        </button>
                        <span>{product.quantity}</span>
                        <button className="bt" onClick={() => handleDec(product._id)}>
                            -
                        </button>
                        <button className="btn" onClick={() => handleRemove(product._id)}>
                            remove
                        </button>
                        <p>Total: {(product.price) * (product.quantity)}</p>
                    </div>
                ))}
                <button className="btn" onClick={handleClick}>
                    Clear Cart
                </button>

            </div>
        </>
    );
};

export default Cart;
