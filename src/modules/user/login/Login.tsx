import { Button } from "@material-ui/core";
import Image from "next/image";
import { useStore } from "stores/store";
import styled from "styled-components";

const Login = () => {
  const { signInGoogle } = useStore().userStore;

  return (
    <StyledWrapper>
      <StyledContainer>
        <Image
          src="/images/brand.png"
          alt="brand"
          objectFit="contain"
          width={355}
          height={200}
        />
        <Button variant="contained" color="primary" onClick={signInGoogle}>
          Sign In
        </Button>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Login;

const StyledWrapper = styled.div`
  background-color: #f2f2f2;
  display: grid;
  place-items: center;
  height: 100vh;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
