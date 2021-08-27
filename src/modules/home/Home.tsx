import EmailsList from "modules/emails/list/EmailsList";
import EmailsSend from "modules/emails/send/EmailsSend";
import HomeSections from "./HomeSections";
import HomeSettings from "./HomeSettings";

const Home = () => {
  return (
    <>
      <HomeSettings />
      <HomeSections />
      <EmailsList />
      <EmailsSend />
    </>
  );
};

export default Home;
