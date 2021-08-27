import Image from "next/image";
import styled from "styled-components";

const HeaderLogo = () => {
  return (
    <StyledContainer>
      <Image
        src="/images/logo.png"
        width={120}
        height={80}
        objectFit="contain"
        alt="logo"
      />
    </StyledContainer>
  );
};

export default HeaderLogo;

const StyledContainer = styled.div`
  margin-left: 0.25rem;
  display: none;

  @media (min-width: 640px) {
    display: inline-flex;
  }
`;
