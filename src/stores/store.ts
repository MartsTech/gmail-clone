import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import EmailStore from "./emailStore";
import UserStore from "./userStore";

interface Store {
  commonStore: CommonStore;
  userStore: UserStore;
  emailStore: EmailStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  userStore: new UserStore(),
  emailStore: new EmailStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};

export const resetStore = () => {
  const { commonStore, userStore, emailStore } = store;
  commonStore.reset();
  userStore.reset();
  emailStore.reset();
};
