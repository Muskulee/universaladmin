"use client";

import PageHeader from "@/app/_lib/smalls/PageHeader";
import Layout from "./../layout";
import { Button, Divider, Image, Input, Textarea } from "@nextui-org/react";
import { useMemo, useState } from "react";

type ContactProps = {};

const Contact = ({}: ContactProps) => {
  const [value, setValue] = useState<string>("test@gmail.com");
  const [name, setName] = useState<string>("tester");

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;
    if (name === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const inputClassName = {
    label: "text-black/50 dark:text-white/90 mt-20",
    input: [
      "bg-transparent",
      "mt-20",
      "text-black/90 dark:text-white/90",
      "placeholder:text-default-700/50 dark:placeholder:text-white/60",
    ],
    innerWrapper: "bg-transparent mt-20",
    inputWrapper: [
      "shadow-xl",
      "bg-default-200/50",
      "dark:bg-default/60",
      "backdrop-blur-xl",
      "backdrop-saturate-200",
      "hover:bg-default-200/70",
      "dark:hover:bg-default/70",
      "group-data-[focused=true]:bg-default-200/50",
      "dark:group-data-[focused=true]:bg-default/60",
      "!cursor-text",
    ],
  };

  return (
    <>
      <PageHeader
        headerTitle="Contact Us"
        headerSubTitle="We are here to assist you"
      />

      <div className="grid grid-cols-2 grid-flow-col gap-4  ">
        <div className="px-8 rounded-2xl justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
          <div className="mt-20 ">
            <Input
              className={inputClassName}
              value={name}
              type="name"
              label="Full Name"
              variant="bordered"
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : "success"}
              errorMessage={isInvalid && "Please enter a valid email"}
              onValueChange={setName}
              // className="max-w-xs"
            />
          </div>
          <div className="mt-20">
            <Input
              className={inputClassName}
              value={value}
              type="email"
              label="Email"
              variant="bordered"
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : "success"}
              errorMessage={isInvalid && "Please enter a valid email"}
              onValueChange={setValue}
              // className="max-w-xs"
            />
          </div>

          <div className="mt-20">
            <Textarea
              isInvalid={true}
              variant="bordered"
              label="Description"
              placeholder="Enter your message"
              defaultValue="Enter your message"
              errorMessage="Cannot be empty"
              className="max-w-full"
            />
          </div>

          <div className="mt-10 flex justify-end">
            <Button fullWidth variant="solid" color="danger" size="lg">
              Choose
            </Button>
          </div>
        </div>

        <div className="hidden lg:block">
          <Image
            className="max-w-full max-h-screen"
            loading="lazy"
            alt="Contact us image"
            src="https://res.cloudinary.com/ddpqusntk/image/upload/v1708494256/contactus_axawkw.jpg"
          />
        </div>
      </div>
    </>
  );
};

Contact.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Contact;
