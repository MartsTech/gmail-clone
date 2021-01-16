import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import mailReducer from "../features/mailSlice";
import userReducer from "../features/userSlice";

const mailPersistConfig = {
  key: "mail",
  storage,
};

const mailPersistedReducer = persistReducer(mailPersistConfig, mailReducer);

export const store = configureStore({
  reducer: {
    mail: mailPersistedReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
