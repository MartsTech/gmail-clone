import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/Inbox";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SidebarOptionsItem from "./SidebarOptionsItem";

const SidebarOptions = () => {
  return (
    <>
      <SidebarOptionsItem Icon={InboxIcon} title="Inbox" count={54} selected />
      <SidebarOptionsItem Icon={StarIcon} title="Starred" count={54} />
      <SidebarOptionsItem Icon={AccessTimeIcon} title="Snoozed" count={54} />
      <SidebarOptionsItem
        Icon={LabelImportantIcon}
        title="Important"
        count={54}
      />
      <SidebarOptionsItem Icon={NearMeIcon} title="Sent" count={54} />
      <SidebarOptionsItem Icon={NoteIcon} title="Drafts" count={54} />
      <SidebarOptionsItem Icon={ExpandMoreIcon} title="More" count={54} />
    </>
  );
};

export default SidebarOptions;
