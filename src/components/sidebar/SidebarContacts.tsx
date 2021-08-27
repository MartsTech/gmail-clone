import { IconButton } from "@material-ui/core";
import DuoIcon from "@material-ui/icons/Duo";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import styled from "styled-components";

const SidebarContacts = () => {
  return (
    <StyledContainer>
      <IconButton>
        <PersonIcon />
      </IconButton>
      <IconButton>
        <DuoIcon />
      </IconButton>
      <IconButton>
        <PhoneIcon />
      </IconButton>
    </StyledContainer>
  );
};

export default SidebarContacts;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;
