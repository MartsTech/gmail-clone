import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type UserContent = {
  displayName: string;
  email: string;
  photoUrl: string;
};

interface UserState {
  user: UserContent | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: { payload: UserContent }) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
