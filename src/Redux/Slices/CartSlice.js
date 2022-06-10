import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
        // console.log("STATE", state);
        // console.log("payload", payload);
      const { _id } = payload;
      console.log("11111", _id);

      const find = state.find((item) => item._id === _id);
      if (find) {
        console.log("FIIIIND", find)
        return state.map((item) => 
          item._id === _id
            ? 
            {
                ...item,
                // quantity: item.quantity + 1
              }
            : item
        );
      } else {
        console.log('elllllse')
        state.push({
            
          ...payload,
        //   quantity: 1
        });
        console.log(state)
      }
    },
    // increament(state, { payload }) {
    //   return state.map((item) =>
    //     item.id === payload
    //       ? {
    //           ...item,
    //           quantity: item.quantity + 1
    //         }
    //       : item
    //   );
    // },
    // decrement(state, { payload }) {
    //   return state.map((item) =>
    //     item.id === payload
    //       ? {
    //           ...item,
    //           quantity: item.quantity - 1
    //         }
    //       : item
    //   );
    // },
    clear(state) {
      return [];
    }
  }
});

export const { addToCart, increament, decrement, clear } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;