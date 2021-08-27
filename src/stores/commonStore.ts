import { makeAutoObservable } from "mobx";

class CommonStore {
  sidebarActive: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.sidebarActive = false;
  };

  toggleSidebar = () => {
    this.sidebarActive = !this.sidebarActive;
  };
}

export default CommonStore;
