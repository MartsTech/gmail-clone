import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import UserStore from "./userStore";

interface Store {
  commonStore: CommonStore;
  userStore: UserStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  userStore: new UserStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};

export const resetStore = () => {
  const { commonStore, userStore } = store;
  commonStore.reset();
  userStore.reset();
};
