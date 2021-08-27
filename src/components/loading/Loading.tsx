import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const Loading = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <Image
          src="/images/brand.png"
          width={355}
          height={200}
          objectFit="contain"
          alt="logo"
        />
        <ClipLoader size={70} />
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Loading;

const StyledWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
