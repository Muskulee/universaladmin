import Layout from "./../layout";

const Contact = () => {
  return <div>Contact</div>;
};

Contact.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Contact;
