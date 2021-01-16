import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth, provider } from "../firebase";
import styles from "../styles/Login.module.css";

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        if (user) {
          dispatch(
            login({
              displayName: user.displayName!,
              email: user.email!,
              photoUrl: user.photoURL!,
            })
          );
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt="gmail"
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
