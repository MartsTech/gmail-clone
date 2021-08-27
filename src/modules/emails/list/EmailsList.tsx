import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";
import { useStore } from "stores/store";
import styled from "styled-components";
import EmailsListItem from "./EmailsListItem";

const EmailsList = () => {
  const { emails, hasMore, loadMore, selectEmail } = useStore().emailStore;
  const router = useRouter();

  const handleSelect = async (id: string) => {
    const success = await selectEmail(id);

    if (success) {
      router.push(`/email/${id}`);
    }
  };

  return (
    <StyledContainer
      id="scrollableDiv"
      style={{
        height: 700,
        overflow: "auto",
      }}
    >
      <InfiniteScroll
        dataLength={emails.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        {emails.map((email) => (
          <EmailsListItem
            key={email.id}
            email={email}
            handleSelect={handleSelect}
          />
        ))}
      </InfiniteScroll>
    </StyledContainer>
  );
};

export default observer(EmailsList);

const StyledContainer = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
