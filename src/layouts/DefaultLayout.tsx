import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import styled from "styled-components";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <StyledContainer>
        <Sidebar />
        <StyledMain>{children}</StyledMain>
      </StyledContainer>
    </>
  );
};

export default DefaultLayout;

const StyledContainer = styled.main`
  display: flex;
`;

const StyledMain = styled.main`
  flex: 1;

  @media (min-width: 768px) {
    margin-left: 20rem;
  }
`;
