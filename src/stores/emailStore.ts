import { makeAutoObservable } from "mobx";

class EmailStore {
  emailFormOpened = false;

  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.emailFormOpened = false;
  };

  sendEmail = () => {};

  setEmailFormOpened = (state: boolean) => {
    this.emailFormOpened = state;
  };
}

export default EmailStore;
