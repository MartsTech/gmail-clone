import { auth } from "config/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User as FirebaseUser,
} from "firebase/auth";
import { makeAutoObservable, reaction } from "mobx";
import { User } from "types/user";
import { resetStore, store } from "./store";

class UserStore {
  user: User | null = null;
  loading: boolean = true;

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.user,
      (user) => {
        if (user) {
          store.emailStore.loadEmails();
        }
      }
    );
  }

  reset = () => {
    this.user = null;
    this.loading = true;
  };

  signInGoogle = () => {
    this.loading = true;

    signInWithPopup(auth, new GoogleAuthProvider())
      .then(({ user }) => {
        this.setUser(user);
      })
      .catch((error) => {
        alert(error.message);
      });

    this.loading = false;
  };

  signOut = () => {
    signOut(auth);
    resetStore();
  };

  setUser = (user: FirebaseUser | null) => {
    if (user) {
      this.user = {
        email: user.email!,
        displayName: user.displayName!,
        photoURL: user.photoURL!,
      };
    } else {
      this.user = null;
    }

    this.loading = false;
  };
}

export default UserStore;
