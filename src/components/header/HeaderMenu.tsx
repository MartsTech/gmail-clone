import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStore } from "stores/store";

const HeaderMenu = () => {
  const { toggleSidebar } = useStore().commonStore;

  return (
    <IconButton onClick={toggleSidebar}>
      <MenuIcon />
    </IconButton>
  );
};

export default HeaderMenu;
