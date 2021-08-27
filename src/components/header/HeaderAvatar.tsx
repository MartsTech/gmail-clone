import { Avatar } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import styled from "styled-components";

const HeaderAvatar = () => {
  const { user, signOut } = useStore().userStore;

  return (
    <StyledContainer>
      <Avatar src={user?.photoURL} alt="avatar" onClick={signOut} />
    </StyledContainer>
  );
};

export default observer(HeaderAvatar);

const StyledContainer = styled.div`
  margin-left: 0.25rem;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;
