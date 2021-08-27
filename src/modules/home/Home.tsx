import DefaultLayout from "layouts/DefaultLayout";
import EmailsList from "modules/emails/list/EmailsList";
import EmailsSend from "modules/emails/send/EmailsSend";
import HomeSections from "./HomeSections";
import HomeSettings from "./HomeSettings";

const Home = () => {
  return (
    <DefaultLayout>
      <HomeSettings />
      <HomeSections />
      <EmailsList />
      <EmailsSend />
    </DefaultLayout>
  );
};

export default Home;
