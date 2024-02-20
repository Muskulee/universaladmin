import { ReactElement } from "react";
import Layout from "./../layout";

const Setting = () => {
  return (
    <>
      <div>Setting</div>
    </>
  );
};

Setting.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Setting;
