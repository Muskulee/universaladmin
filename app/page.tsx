import { Button } from "@nextui-org/button";

import GeneralNav from "./_lib/smalls/GeneralNav";
import { BsShareFill } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <main className="bg-white">
        <GeneralNav />
      </main>

      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-300 to-white h-screen text-black bg-blend-multiply">
        <h1 className="text-6xl font-bold text-center mb-8">
          React and NextJS Admin Template
        </h1>
        <p className="mb-6 px-20 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
          Use. Reuse. Launch
        </p>

        <div className="flex gap-4 items-center">
          <Button
            variant="solid"
            color="danger"
            size="lg"
            endContent={<FaGithubSquare />}
          >
            Download
          </Button>
          <Button
            size="lg"
            color="secondary"
            variant="bordered"
            startContent={<BsShareFill />}
          >
            Share
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
