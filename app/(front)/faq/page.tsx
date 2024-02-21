import Layout from "./../layout";

const FAQ = () => {
  return <div>FAQ</div>;
};

FAQ.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default FAQ;
