import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const {setProductName} = productSlice.actions;

export default productSlice.reducer;
