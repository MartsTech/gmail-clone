import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import ErrorIcon from "@material-ui/icons/Error";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import PrintIcon from "@material-ui/icons/Print";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectOpenMail } from "../features/mailSlice";
import styles from "../styles/Mail.module.css";

const Mail: React.FC = () => {
  const history = useHistory();

  const selectedMail = useSelector(selectOpenMail);

  return (
    <div className={styles.mail}>
      <div className={styles.tools}>
        <div className={styles.left}>
          <IconButton onClick={() => history.push("/")} name="arrowBack">
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className={styles.right}>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.header}>
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon className={styles.important} />
          <p>{selectedMail?.title}</p>
          <p className={styles.time}>{selectedMail?.time}</p>
        </div>
        <div className={styles.message}>
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
