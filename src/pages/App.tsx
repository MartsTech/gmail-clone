import { LinearProgress } from "@material-ui/core";
import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../components/Header";
import { SendMail } from "../components/SendMail";
import { Sidebar } from "../components/Sidebar";
import { selectSendMessageIsOpen } from "../features/mailSlice";
import { login, selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import styles from "../styles/App.module.css";

const Login = lazy(() => import("./Login"));
const Mail = lazy(() => import("./Mail"));
const EmailList = lazy(() => import("./EmailList"));

const App: React.FC = () => {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName!,
            email: user.email!,
            photoUrl: user.photoURL!,
          })
        );
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        {!user ? (
          <Suspense fallback={<LinearProgress />}>
            <Route path="/" component={Login} />
          </Suspense>
        ) : (
          <Suspense fallback={<LinearProgress />}>
            <div className={styles.app}>
              <Header />
              <div className={styles.body}>
                <Sidebar />

                <Route path="/" exact component={EmailList} />
                <Route path="/mail" component={Mail} />
              </div>

              {sendMessageIsOpen && <SendMail />}
            </div>
          </Suspense>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
