import { IconButton } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

const HeaderOptions = () => {
  return (
    <>
      <IconButton>
        <AppsIcon />
      </IconButton>
      <IconButton>
        <NotificationsIcon />
      </IconButton>
    </>
  );
};

export default HeaderOptions;
