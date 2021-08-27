import DefaultLayout from "layouts/DefaultLayout";
import EmailsDetails from "modules/emails/details/EmailsDetails";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStore } from "stores/store";

const EmailPage = () => {
  const { selectEmail } = useStore().emailStore;
  const router = useRouter();

  useEffect(() => {
    if (typeof router.query.id === "string") {
      selectEmail(router.query.id);
    }
  }, [router.query.id, selectEmail]);

  return (
    <DefaultLayout>
      <EmailsDetails />
    </DefaultLayout>
  );
};

export default EmailPage;
