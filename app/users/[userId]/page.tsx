import { Metadata } from "next";

type Props = {
  params: { userId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`New User Ademimpe ${params.userId}`);
    }, 1000);
  });

  return {
    title: `${title}`,
  };
};

const userDetails = ({ params }: Props) => {
  return <h1>User details goes in here. {params.userId}</h1>;
};

export default userDetails;
