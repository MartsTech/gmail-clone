import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
