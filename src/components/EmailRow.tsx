import { Checkbox, IconButton } from "@material-ui/core";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectMail } from "../features/mailSlice";
import styles from "../styles/EmailRow.module.css";

interface EmailRowProps {
  id: string;
  title: string;
  subject: string;
  description: string;
  time: string;
}

export const EmailRow: React.FC<EmailRowProps> = ({
  id,
  title,
  subject,
  description,
  time,
}) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );

    history.push("/mail");
  };

  return (
    <div className={styles.emailRow} onClick={openMail}>
      <div className={styles.options}>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.message}>
        <h4>
          {subject} <span className={styles.description}>{description}</span>
        </h4>
      </div>
      <div className={styles.time}>{time}</div>
    </div>
  );
};
