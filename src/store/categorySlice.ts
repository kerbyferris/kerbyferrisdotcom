import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface CategoryState {
  value: string;
}

const initialState: CategoryState = {
  value: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryState: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setCategoryState } = categorySlice.actions;

export const selectCategoryState = (state: RootState) => state.category.value;

export default categorySlice.reducer;
