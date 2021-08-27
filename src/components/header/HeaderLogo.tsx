import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const HeaderLogo = () => {
  const router = useRouter();

  return (
    <StyledContainer onClick={() => router.push("/")}>
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
  cursor: pointer;

  @media (min-width: 640px) {
    display: inline-flex;
  }
`;
