import Layout from "./../layout";
import type { ReactElement } from "react";

const Dashboard = () => {
  return <></>;
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
