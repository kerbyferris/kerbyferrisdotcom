import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Categories } from "~/lib/data";

interface CategoryState {
  value: Categories;
}

const initialState: CategoryState = {
  value: Categories.None,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryState: (state, action: PayloadAction<Categories>) => {
      state.value = action.payload;
    },
  },
});

export const { setCategoryState } = categorySlice.actions;

export const selectCategoryState = (state: RootState) => state.category.value;

export default categorySlice.reducer;
