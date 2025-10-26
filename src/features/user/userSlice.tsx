import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    resetUser: (state) => {
        state.user = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, resetUser } = userSlice.actions

export const selectUser = (state:any) => state.user.user


export default userSlice.reducer