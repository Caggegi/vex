import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import orderReducer from '../features/shipments/orderSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer
  },
})