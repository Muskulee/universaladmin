import Layout from "./../layout";

const About = () => {
  return <div>Layout</div>;
};

About.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
