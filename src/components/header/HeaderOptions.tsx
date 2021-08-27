import { IconButton } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import React from "react";
import styled from "styled-components";

const HeaderOptions = () => {
  return (
    <StyledContainer>
      <IconButton>
        <AppsIcon />
      </IconButton>
      <IconButton>
        <NotificationsIcon />
      </IconButton>
    </StyledContainer>
  );
};

export default HeaderOptions;

const StyledContainer = styled.div`
  display: none;

  @media (min-width: 640px) {
    display: inline-flex;
  }
`;
