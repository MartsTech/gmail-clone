import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { useStore } from "stores/store";
import styled from "styled-components";

const EmailsSendHeader = () => {
  const { setEmailFormOpened } = useStore().emailStore;

  return (
    <StyledContainer>
      <StyledTitle>New Message</StyledTitle>
      <StyledIconContainer>
        <CloseIcon onClick={() => setEmailFormOpened(false)} />
      </StyledIconContainer>
    </StyledContainer>
  );
};

export default EmailsSendHeader;

const StyledContainer = styled.div`
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
`;

const StyledTitle = styled.h3`
  color: whitesmoke;
  font-size: 0.875rem;
`;

const StyledIconContainer = styled.div`
  cursor: pointer;
`;
