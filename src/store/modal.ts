import { createSlice } from "@reduxjs/toolkit";

interface Modal {
  title: string;
  message: string;
  showModal: boolean;
}

const initialModal: Modal = {
  title: "",
  message: "",
  showModal: false,
};

const slice = createSlice({
  name: "modal",
  initialState: { modal: initialModal },
  reducers: {
    toggleModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export default slice.reducer;

export const { toggleModal } = slice.actions;

export const setModal =
  (title: string, message: string, showModal: boolean) =>
  async (dispatch: any) => {
    try {
      dispatch(toggleModal({ title, message, showModal }));
    } catch (e) {
      return console.error(e.message);
    }
  };
