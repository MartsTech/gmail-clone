import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import firebase from "firebase";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase";
import styles from "../styles/SendMail.module.css";

type MailData = {
  to: string;
  subject: string;
  message: string;
};

export const SendMail: React.FC = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm<MailData>();

  const onSubmit = (data: MailData) => {
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className={styles.sendMail}>
      <div className={styles.header}>
        <h3>New Message</h3>
        <CloseIcon
          className={styles.close}
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          ref={register({ required: true })}
        />
        {errors.to && errors.to.type === "required" && (
          <div className={styles.error}>Please enter an email</div>
        )}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })}
        />
        {errors.subject && errors.subject.type === "required" && (
          <div className={styles.error}>Please enter a subject</div>
        )}
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className={styles.message}
          ref={register({ required: true })}
        />
        {errors.message && errors.message.type === "required" && (
          <div className={styles.error}>Please enter a message</div>
        )}

        <div className={styles.options}>
          <Button
            className={styles.send}
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};
