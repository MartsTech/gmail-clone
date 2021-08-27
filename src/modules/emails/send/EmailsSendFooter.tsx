import { Button } from "@material-ui/core";
import styled from "styled-components";

const EmailsSendFooter = () => {
  return (
    <StyledContainer>
      <StyledButton variant="contained" color="primary" type="submit">
        Send
      </StyledButton>
    </StyledContainer>
  );
};

export default EmailsSendFooter;

const StyledContainer = styled.div`
  padding: 0.5rem;
`;

const StyledButton = styled(Button)`
  &&& {
    background-color: #3079ed;
    text-transform: capitalize;
  }
`;
