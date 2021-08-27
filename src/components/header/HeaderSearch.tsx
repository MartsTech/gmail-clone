import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

const HeaderSearch = () => {
  return (
    <StyledContainer>
      <StyledSearchIcon />
      <StyledInput placeholder="Search mail" type="text" />
      <StyledCaret />
    </StyledContainer>
  );
};

export default HeaderSearch;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: whitesmoke;
  padding: 0.75rem;
  border-radius: 0.25rem;
`;

const StyledSearchIcon = styled(SearchIcon)`
  &&& {
    color: gray;
  }
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: none;
  outline: none;
  font-size: medium;
  background-color: transparent;
`;

const StyledCaret = styled(ArrowDropDownIcon)`
  &&& {
    color: gray;
  }
`;
