import styled from "styled-components";
import HeaderAvatar from "./HeaderAvatar";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderOptions from "./HeaderOptions";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLeft>
        <HeaderMenu />
        <HeaderLogo />
      </StyledLeft>
      <StyledCenter>
        <HeaderSearch />
      </StyledCenter>
      <StyledRight>
        <HeaderOptions />
        <HeaderAvatar />
      </StyledRight>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
`;

const StyledLeft = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCenter = styled.div`
  flex: 0.7;
`;

const StyledRight = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1.25rem;
`;
