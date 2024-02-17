import Layout from "./../layout";
import type { ReactElement } from "react";
import { TiEyeOutline } from "react-icons/ti";
import { MdOutlineShowChart } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { PiUsersThreeFill } from "react-icons/pi";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Button,
  Image,
  Chip,
} from "@nextui-org/react";
import DashCard from "@/app/_lib/smalls/DashCard";

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="gap-2 grid grid-cols-12 grid-rows-2 px-8 ">
          {/* Total Views */}
          <DashCard
            cardIcon={<TiEyeOutline size={18} />}
            cardName={"Total Views"}
            cardValue={"$3.456K"}
            buttomIcon={<MdOutlineShowChart size={30} />}
            footerName={"Chart Available soon."}
          />

          {/* Earnings This Month */}
          <DashCard
            cardIcon={<GiTakeMyMoney size={18} />}
            cardName={"Earnings This Month"}
            cardValue={"$3.456K"}
            buttomIcon={<MdOutlineShowChart size={30} />}
            footerName={"Chart Available soon."}
          />

          {/* Earnings This Year */}
          <DashCard
            cardIcon={<GiTakeMyMoney size={18} />}
            cardName={"Earnings This Year"}
            cardValue={"$3.456K"}
            buttomIcon={<MdOutlineShowChart size={30} />}
            footerName={"Chart Available soon."}
          />

          {/* All Users */}
          <DashCard
            cardIcon={<PiUsersThreeFill size={18} />}
            cardName={"Total Users"}
            cardValue={"$3.456K"}
            buttomIcon={<MdOutlineShowChart size={30} />}
            footerName={"Chart Available soon."}
          />
        </div>

        <div className="max-w-[900px]">
          
        </div>
      </div>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
