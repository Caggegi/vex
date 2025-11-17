import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    order: null,
    sender: null,
    receiver: null
  },
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload
    },
    resetOrder: (state) => {
        state.order = null
    },
    setSender: (state, action) => {
      state.sender = action.payload
    },
    setReceiver: (state, action) => {
      state.receiver = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setOrder,
  setSender,
  setReceiver,
  resetOrder
} = orderSlice.actions

export const selectOrder = (state:any) => state.order.order
export const selectSender = (state:any) => state.order.sender
export const selectReceiver = (state:any) => state.order.receiver

export default orderSlice.reducer