import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { setModal } from "./modal";

interface Order {
  name: string | null;
  quantity: number | null;
  cost: number | null;
}

const initialOrder: Order[] = [{ name: null, quantity: null, cost: null }];

const slice = createSlice({
  name: "order",
  initialState: {
    order: initialOrder,
  },
  reducers: {
    addOrder: (state: any, action: any) => {
      const name = state.order.find(
        (item: any) => item.name === action.payload.name
      );
      if (name) {
        _.find(state?.order, { name: action.payload.name }).quantity =
          action.payload.quantity;
      } else {
        state.order = [...state.order, action.payload];
      }
    },
    removeOrder: (state: any, action: any) => {
      if (action.payload.quantity >= 1) {
        _.find(state.order, { name: action.payload.name }).quantity =
          action.payload.quantity;
      } else {
        _.remove(state.order, {
          name: action.payload.name,
        });
      }
    },
    cancelOrder: (state: any) => {
      state.order = initialOrder;
      localStorage.removeItem("order");
    },
  },
});

export default slice.reducer;

const { addOrder, removeOrder, cancelOrder } = slice.actions;

export const add = (order: any) => async (dispatch: any) => {
  try {
    dispatch(addOrder(order));
  } catch (e) {
    const modal = {
      title: "Error.",
      message: "Sorry, but we are unable to process your order.",
      showModal: true,
    };

    dispatch(setModal(modal.title, modal.message, modal.showModal));
  }
};

export const remove = (order: any) => async (dispatch: any) => {
  try {
    dispatch(removeOrder(order));
  } catch (e) {
    return console.error(e.message);
  }
};

export const cancel = () => async (dispatch: any) => {
  try {
    return dispatch(cancelOrder());
  } catch (e) {
    return console.error(e.message);
  }
};
