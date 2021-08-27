import { Checkbox, IconButton } from "@material-ui/core";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import styled from "styled-components";

const EmailsListItemOptions = () => {
  return (
    <StyledContainer>
      <Checkbox />
      <IconButton>
        <StarBorderOutlinedIcon />
      </IconButton>
      <IconButton>
        <LabelImportantOutlinedIcon />
      </IconButton>
    </StyledContainer>
  );
};

export default EmailsListItemOptions;

const StyledContainer = styled.div`
  display: flex;

  @media (max-width: 640px) {
    display: none;
  }
`;
