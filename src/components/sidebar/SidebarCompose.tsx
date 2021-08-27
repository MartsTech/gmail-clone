import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useStore } from "stores/store";
import styled from "styled-components";

const SidebarCompose = () => {
  const { setEmailFormOpened } = useStore().emailStore;

  return (
    <StyledButton
      onClick={() => setEmailFormOpened(true)}
      startIcon={<AddIcon fontSize="large" />}
    >
      Compose
    </StyledButton>
  );
};

export default SidebarCompose;

const StyledButton = styled(Button)`
  &&& {
    margin: 1rem 0.75rem;
    text-transform: capitalize;
    color: gray;
    padding: 1rem;
    border-radius: 1.75rem;
    box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
  }
`;
