import { Button } from "@material-ui/core";
import TextInput from "components/form/TextInput";
import { Form, Formik } from "formik";
import { useStore } from "stores/store";
import styled from "styled-components";
import * as Yup from "yup";

const validationSchema = Yup.object({
  recipient: Yup.string()
    .required("Recipient is required")
    .email("Email is not in the correct format")
    .max(255, "Email is too long"),
  subject: Yup.string()
    .required("Subject is required")
    .max(255, "Subject is too long"),
  message: Yup.string()
    .required("Message is required")
    .max(500, "Message is too long"),
});

const EmailsSendForm = () => {
  const { sendEmail } = useStore().emailStore;

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ recipient: "", subject: "", message: "" }}
      onSubmit={sendEmail}
    >
      {({ handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit} autoComplete="off">
          <TextInput name="recipient" placeholder="Recipient" />
          <TextInput name="subject" placeholder="Subject" />
          <TextInput name="message" placeholder="Message" />
          <StyledButton variant="contained" color="primary" type="submit">
            Send
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default EmailsSendForm;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const StyledButton = styled(Button)`
  &&& {
    background-color: #3079ed;
    text-transform: capitalize;
  }
`;
