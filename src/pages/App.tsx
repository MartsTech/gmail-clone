import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import styles from "../styles/App.module.css";
import EmailList from "./EmailList";
import Mail from "./Mail";

const App: React.FC = () => {
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
      </div>
    </BrowserRouter>
  );
};

export default App;
