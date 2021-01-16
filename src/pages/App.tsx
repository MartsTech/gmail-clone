import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../components/Header";
import { SendMail } from "../components/SendMail";
import { Sidebar } from "../components/Sidebar";
import { selectSendMessageIsOpen } from "../features/mailSlice";
import styles from "../styles/App.module.css";
import EmailList from "./EmailList";
import Mail from "./Mail";

const App: React.FC = () => {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <div className={styles.body}>
          <Sidebar />

          <Switch>
            <Route path="/" exact component={EmailList} />
            <Route path="/mail" component={Mail} />
          </Switch>
        </div>

        {sendMessageIsOpen && <SendMail />}
      </div>
    </BrowserRouter>
  );
};

export default App;
