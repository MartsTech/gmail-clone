import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { observer } from "mobx-react-lite";
import moment from "moment";
import { useStore } from "stores/store";
import styled from "styled-components";

const EmailsDetailsContent = () => {
  const { selectedEmail } = useStore().emailStore;

  if (!selectedEmail) {
    return null;
  }

  const { subject, recipient, timestamp, message } = selectedEmail;

  return (
    <>
      <StyledHeader>
        <StyledSubject>{subject}</StyledSubject>
        <StyledImportantIcon />
        <StyledRecipient>{recipient}</StyledRecipient>
        <StyledTime>{moment(timestamp).format("lll")}</StyledTime>
      </StyledHeader>
      <StyledMessage>{message}</StyledMessage>
    </>
  );
};

export default observer(EmailsDetailsContent);

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
  padding: 1.25rem;
  position: relative;

  @media (max-width: 640px) {
    padding: 0;
  }
`;

const StyledSubject = styled.h2`
  font-weight: 400;
  margin-right: 1.25rem;

  @media (max-width: 640px) {
    font-size: 1rem;
    margin: 1.5rem 0.25rem;
  }
`;

const StyledImportantIcon = styled(LabelImportantIcon)`
  &&& {
    color: #e8ab02;
  }
`;

const StyledRecipient = styled.p`
  margin-left: 1.25rem;
`;

const StyledTime = styled.p`
  margin-left: 1.25rem;
  position: absolute;
  top: 1.5rem;
  right: 0;
  font-size: 0.75rem;
  color: gray;

  @media (max-width: 640px) {
    top: 0;
  }
`;

const StyledMessage = styled.p`
  padding: 0.75rem;
  margin-right: 1.25rem;
  overflow-wrap: break-word;
`;
