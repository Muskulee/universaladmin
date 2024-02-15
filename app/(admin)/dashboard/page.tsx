import Link from "next/link";
import Layout from "./layout";
import type { ReactElement } from "react";
import { Providers } from "./../../providers";

const Dashboard = () => {
  return <></>;
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
