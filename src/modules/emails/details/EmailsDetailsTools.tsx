import { IconButton } from "@material-ui/core";
import { useRouter } from "next/router";
import styled from "styled-components";
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

const EmailsDetailsTools = () => {
  const router = useRouter();

  return (
    <StyledContainer>
      <StyledSection>
        <IconButton onClick={() => router.push("/")}>
          <ArrowBackIcon />
        </IconButton>
        <StyledIconButton>
          <MoveToInboxIcon />
        </StyledIconButton>
        <StyledIconButton>
          <ErrorIcon />
        </StyledIconButton>
        <StyledIconButton>
          <DeleteIcon />
        </StyledIconButton>
        <StyledIconButton>
          <EmailIcon />
        </StyledIconButton>
        <StyledIconButton>
          <WatchLaterIcon />
        </StyledIconButton>
        <StyledIconButton>
          <CheckCircleIcon />
        </StyledIconButton>
        <StyledIconButton>
          <LabelImportantIcon />
        </StyledIconButton>
        <StyledIconButton>
          <MoreVertIcon />
        </StyledIconButton>
      </StyledSection>
      <StyledSection>
        <StyledIconButton>
          <UnfoldMoreIcon />
        </StyledIconButton>
        <StyledIconButton>
          <PrintIcon />
        </StyledIconButton>
        <StyledIconButton>
          <ExitToAppIcon />
        </StyledIconButton>
      </StyledSection>
    </StyledContainer>
  );
};

export default EmailsDetailsTools;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

const StyledSection = styled.div`
  display: flex;
`;

const StyledIconButton = styled(IconButton)`
  &&& {
    @media (max-width: 640px) {
      :nth-child(1) {
        display: none;
      }
      :nth-child(2) {
        display: none;
      }
      :nth-child(3) {
        display: none;
      }
      :nth-child(4) {
        display: none;
      }
    }
  }
`;
