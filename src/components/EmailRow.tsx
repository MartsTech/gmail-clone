import { Checkbox, IconButton } from "@material-ui/core";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../styles/EmailRow.module.css";

interface EmailRowProps {
  title: string;
  subject: string;
  description: string;
  time: string;
}

export const EmailRow: React.FC<EmailRowProps> = ({
  title,
  subject,
  description,
  time,
}) => {
  const history = useHistory();

  return (
    <div className={styles.emailRow} onClick={() => history.push("/mail")}>
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
