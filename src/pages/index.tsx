import DefaultLayout from "layouts/DefaultLayout";
import IsAuth from "modules/auth/IsAuth";
import Home from "modules/home/Home";

const HomePage = () => {
  return (
    <IsAuth>
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </IsAuth>
  );
};

export default HomePage;
