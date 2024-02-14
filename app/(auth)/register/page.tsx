import { ReactElement } from "react";
import Layout from "./layout";

export const metadata = {
  title: "Register",
};

const Register = () => {
  return <h1>Register</h1>;
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Register;
