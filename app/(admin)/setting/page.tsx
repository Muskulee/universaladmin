"use client";

import { ReactElement, useMemo, useState } from "react";
import Layout from "./../layout";
import { Card, CardBody, Chip, Tab, Tabs } from "@nextui-org/react";
import { CgDesignmodo, CgWebsite } from "react-icons/cg";
import { MdEmail, MdPayment, MdSdStorage } from "react-icons/md";
import GeneralSettings from "./GeneralSettings";
import PaymentSettings from "./PaymentSettings";
import EmailSettings from "./EmailSettings";
import StorageSettings from "./StorageSettings";
import BrandSettings from "./BrandSettings";
import BillSettings from "./BillSettings";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

type SettingProps = {
  SettingTabs: Array<string>;
};

const Setting = ({}: SettingProps) => {
  const [item, setItem] = useState<string>("General");
  const [content, setContent] = useState<ReactElement>(<></>);
  const SettingTabs = [
    {
      title: "General",
      key: "General",
      icon: <CgWebsite />,
    },
    {
      title: "Branding",
      key: "Branding",
      icon: <CgDesignmodo />,
    },
    {
      title: "Payment",
      key: "Payment",
      icon: <MdPayment />,
    },
    {
      title: "Email",
      key: "Email",
      icon: <MdEmail />,
    },
    // {
    //   title: "Storage",
    //   key: "Storage",
    //   icon: <MdSdStorage />,
    // },

    // {
    //   title: "Bill",
    //   key: "Bill",
    //   icon: <FaMoneyBillTrendUp />,
    // },
  ];

  useMemo(() => {
    switch (item) {
      case "General":
        setContent(<GeneralSettings />);
        break;

      case "Branding":
        setContent(<BrandSettings />);
        break;

      case "Payment":
        setContent(<PaymentSettings />);
        break;

      case "Email":
        setContent(<EmailSettings />);
        break;

      // case "Storage":
      //   setContent(<StorageSettings />);
      //   break;

      // case "Bill":
      //   setContent(<BillSettings />);
      //   break;

      default:
        setContent(<div>Whatever Settings Component Goes Here!</div>);
        break;
    }
  }, [item]);

  return (
    <>
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          size="lg"
          color="danger"
          variant="bordered"
          selectedKey={item}
          onSelectionChange={setItem}
        >
          {SettingTabs.map((setting, index) => {
            return (
              <Tab
                key={setting.key}
                title={
                  <div className="flex items-center space-x-2">
                    <span>{setting.icon}</span>
                    <span> {setting.title}</span>
                  </div>
                }
              >
                <Card>
                  <CardBody>{content}</CardBody>
                </Card>
              </Tab>
            );
          })}
        </Tabs>
      </div>
    </>
  );
};

Setting.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Setting;
