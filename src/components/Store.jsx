import { useEffect } from "react";
import "../styles/index.css"
// import "../assets/scss/Items.scss"
import { add } from "../store/cartSlice"
import { useDispatch, useSelector } from "react-redux";
import { STATUS, fetchProducts } from "../store/productSlice";
import { Box, CircularProgress } from "@mui/material";

const Store = () => {
    const dispatch = useDispatch()

    const { data, status } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);
    const handleClick = (data) => {
        dispatch(add(data))
    }
    if (status === STATUS.LOADING) {
        return (
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", marginTop: "50vh" }}>

                <CircularProgress />

                <p>loding....</p>
            </Box>
        )
    }
    else if (status === STATUS.IDLE) {
        console.log(status);
    }
    const datas = data.map(element => {
        return { ...element, quantity: 1 };
    });

    return (
        <div className="productsWrapper">
            {datas !== undefined && datas.map((value) => (
                <div className="card" key={value._id}>
                    <img src={value.imageUrl} alt="img" />
                    <h3>{value.name}</h3>
                    <div className="rating">
                        <p>{value.rating}*</p>
                    </div>
                    <p>{value.price}</p>
                    <p>{value.description}</p>
                    <button onClick={() => handleClick(value)} className="btn">Add to cart</button>
                </div>
            ))
            }

        </div>
    );
};
export default Store;
