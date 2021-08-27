import InboxIcon from "@material-ui/icons/Inbox";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PeopleIcon from "@material-ui/icons/People";
import styled from "styled-components";
import HomeSectionsItem from "./HomeSectionsItem";

const HomeSections = () => {
  return (
    <StyledContainer>
      <HomeSectionsItem Icon={InboxIcon} title="Primary" color="red" selected />
      <HomeSectionsItem Icon={PeopleIcon} title="Social" color="#1A73E8" />
      <HomeSectionsItem
        Icon={LocalOfferIcon}
        title="Promotions"
        color="green"
      />
    </StyledContainer>
  );
};

export default HomeSections;

const StyledContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 40;
  display: flex;
  border-bottom: 1px solid whitesmoke;
  background-color: white;
`;
