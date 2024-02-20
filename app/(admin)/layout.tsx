"use client";

import React, { ReactNode, useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { COLORS } from "./../_lib/colors";
import MyNavbar from "./NavBar";
import { SearchIcon } from "./SearchIcon";
import { IoMdPersonAdd } from "react-icons/io";

import { Button, ButtonGroup, Image } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { useSelector } from "react-redux";

type LayoutProps = {
  children: ReactNode;
  style?: React.CSSProperties;
  closed?: boolean;
};

const DashBoardLayout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { id, name, email } = useSelector(
    (state: {
      user: {
        id: string;
        name: string;
        email: string;
      };
    }) => state.user
  );

  const [closedNav, setClosedNav] = useState(true);

  const toggleNav = () => {
    setClosedNav(!closedNav);
  };

  const getNavWidth = () => (closedNav ? "w-16" : "w-56");

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <div className="flex bg-white dark:bg-darkblack-500">
      <div
        className={
          getNavWidth() +
          " min-h-screen transition-width border border-right border-white dark:border-darkblack-500 ml-2 bg-white dark:bg-darkblack-500"
          // " min-h-screen bg-colors-swatch_1 transition-width border border-right"
        }
      >
        <div className="sticky top-2">
          <MyNavbar
            closed={closedNav}
            setLogOut={() => {}}
            logo={<Image width={60} height={""} src="/assets/logo.png" />}
          />
        </div>
      </div>
      <div className="flex-1 min-h-screen">
        {/* // bg-swatch_1 */}
        {/* <div className="sticky top-0 justify-between"> */}
        <div className="flex item-center p-2 space-x-2">
          <Navbar
            isBordered
            className="flex-0 justify-between flex-end"
            maxWidth="full"
          >
            <button onClick={toggleNav}>
              {closedNav ? (
                <AiOutlineMenuUnfold size="25" color={COLORS.swatch_2a} />
              ) : (
                <AiOutlineMenuFold size="25" color={COLORS.swatch_4a} />
              )}
            </button>
            {/* <NavbarBrand className="mr-4">
              <AcmeLogo />
              <p className="hidden sm:block font-bold text-inherit">ACME</p>
            </NavbarBrand> */}
            <NavbarContent className="hidden lg:flex flex-grow gap-4 ml-auto">
              <NavbarItem>
                {/* <Link color="foreground" href="#">
                  Features
                </Link> */}
              </NavbarItem>
              <NavbarItem isActive>
                {/* <Link href="#" aria-current="page" color="secondary">
                  Customers
                </Link> */}
              </NavbarItem>

              <NavbarItem>
                {/* <Link color="foreground" href="#">
                  Integrations
                </Link> */}
              </NavbarItem>
            </NavbarContent>
            <div className="flex items-center justify-end p-6 lg:px-8">
              <NavbarContent as="div" className="flex items-center justify-end">
                <Button isIconOnly color="success" aria-label="Like">
                  <IoMdPersonAdd size={20} color={COLORS.swatch_2} />
                </Button>
                <Input
                  classNames={{
                    base: "max-w-full sm:max-w-[10rem] h-10",
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper:
                      "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                  }}
                  placeholder="Type to search..."
                  size="sm"
                  startContent={<SearchIcon size={18} />}
                  type="search"
                />
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform"
                      color="secondary"
                      name="Jason Hughes"
                      size="sm"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <p className="font-semibold">Signed in as</p>
                      <p className="font-semibold">admin@example.com</p>
                    </DropdownItem>
                    <DropdownItem key="settings">My Settings</DropdownItem>
                    <DropdownItem key="team_settings">
                      Team Settings
                    </DropdownItem>
                    {/* <DropdownItem key="analytics">Analytics</DropdownItem>
                    <DropdownItem key="system">System</DropdownItem>
                    <DropdownItem key="configurations">
                      Configurations
                    </DropdownItem>
                    <DropdownItem key="help_and_feedback">
                      Help & Feedback
                    </DropdownItem> */}
                    <DropdownItem key="logout" color="danger">
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarContent>
            </div>
          </Navbar>
        </div>
        <div className="px-8">{children}</div>
      </div>
    </div>
    // </div>
  );
};

export default DashBoardLayout;
