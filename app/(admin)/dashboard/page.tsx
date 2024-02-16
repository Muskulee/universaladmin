import Layout from "./../layout";
import type { ReactElement } from "react";

const Dashboard = () => {
  return (
    <>
      <div className="flex"></div>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
