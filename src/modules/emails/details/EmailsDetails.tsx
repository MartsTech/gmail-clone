import styled from "styled-components";
import EmailsDetailsContent from "./EmailsDetailsContent";
import EmailsDetailsTools from "./EmailsDetailsTools";

const EmailsDetails = () => {
  return (
    <StyledContainer>
      <EmailsDetailsTools />
      <StyledBody>
        <EmailsDetailsContent />
      </StyledBody>
    </StyledContainer>
  );
};

export default EmailsDetails;

const StyledContainer = styled.div`
  flex: 1;
  background-color: whitesmoke;
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  margin-bottom: 0;
  background-color: white;
  padding: 1.25rem;
  height: 75vh;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
  overflow: hidden;
`;
