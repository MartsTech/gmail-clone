import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import styled from "styled-components";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <StyledMain>
        <Sidebar />
        {children}
      </StyledMain>
    </>
  );
};

export default DefaultLayout;

const StyledMain = styled.main`
  display: flex;
`;
