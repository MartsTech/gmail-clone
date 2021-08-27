import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RedoIcon from "@material-ui/icons/Redo";
import SettingsIcon from "@material-ui/icons/Settings";
import styled from "styled-components";

const HomeSettings = () => {
  return (
    <StyledContainer>
      <StyledSection>
        <Checkbox />
        <StyledIconButton>
          <ArrowDropDownIcon />
        </StyledIconButton>
        <StyledIconButton>
          <RedoIcon />
        </StyledIconButton>
        <StyledIconButton>
          <MoreVertIcon />
        </StyledIconButton>
      </StyledSection>
      <StyledSection>
        <StyledIconButton>
          <ChevronLeftIcon />
        </StyledIconButton>
        <StyledIconButton>
          <ChevronRightIcon />
        </StyledIconButton>
        <StyledIconButton>
          <KeyboardHideIcon />
        </StyledIconButton>
        <StyledIconButton>
          <SettingsIcon />
        </StyledIconButton>
      </StyledSection>
    </StyledContainer>
  );
};

export default HomeSettings;

const StyledContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
  background-color: white;
  z-index: 10;
`;

const StyledSection = styled.div`
  display: flex;
`;

const StyledIconButton = styled(IconButton)`
  &&& {
    @media (max-width: 640px) {
      :nth-child(2) {
        display: none;
      }
    }
  }
`;
