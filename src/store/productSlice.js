import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = () => {
  return async function fetchProd(dispatch) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const res = await fetch("http://3.7.252.58:4001/product/getAllProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          cookie:
            "connect.sid=s%253AC9UlQ9M1W1aslddIqBNrrk68Yx4GleaF.OyLqPkC%252FpbJKf070EG6KIJoS70bHaP5GOYxBXBV6hG8",
        },
        body: JSON.stringify({
          limit: 100,
          page: 0,
          search: "",
        }),
      });
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUS.IDLE));
    } catch (err) {
      console.error(err);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};
