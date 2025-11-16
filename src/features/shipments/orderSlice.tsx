import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    order: null,
  },
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload
    },
    resetOrder: (state) => {
        state.order = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { setOrder, resetOrder } = orderSlice.actions

export const selectOrder = (state:any) => state.order.order

export default orderSlice.reducer