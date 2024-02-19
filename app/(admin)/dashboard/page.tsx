"use client";

import Layout from "./../layout";
import { useEffect, type ReactElement, useCallback, Key } from "react";
import { TiEyeOutline } from "react-icons/ti";
import { MdDelete, MdDeleteOutline, MdOutlineShowChart } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { PiUsersThreeFill } from "react-icons/pi";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  User,
  Tooltip,
  Chip,
} from "@nextui-org/react";

import DashCard from "@/app/_lib/smalls/DashCard";
import { BiEdit } from "react-icons/bi";
import { FcDeleteColumn } from "react-icons/fc";

type DashBoardProps = {
  users: Array<{
    id: number;
    name: string;
    role: string;
    team: string;
    status: string;
    age: string;
    avatar: string;
    email: string;
  }>;
  statusColorMap?: "name" | "role" | "status" | "actions";
};

const Dashboard = ({ users }: DashBoardProps): ReactElement => {
  useEffect(() => {
    // You can expose any functions or logic here
  }, []);

  const testUsers = [
    {
      id: 1,
      name: "Tony Reichert",
      role: "CEO",
      team: "Management",
      status: "active",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "tony.reichert@example.com",
    },
    {
      id: 2,
      name: "Zoey Lang",
      role: "Technical Lead",
      team: "Development",
      status: "paused",
      age: "25",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      email: "zoey.lang@example.com",
    },
    {
      id: 3,
      name: "Jane Fisher",
      role: "Senior Developer",
      team: "Development",
      status: "active",
      age: "22",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      email: "jane.fisher@example.com",
    },
    {
      id: 4,
      name: "William Howard",
      role: "Community Manager",
      team: "Marketing",
      status: "vacation",
      age: "28",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      email: "william.howard@example.com",
    },
    {
      id: 5,
      name: "Kristen Copper",
      role: "Sales Manager",
      team: "Sales",
      status: "active",
      age: "24",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      email: "kristen.cooper@example.com",
    },
  ];

  const renderCell = useCallback(
    (
      user: {
        name?: string;
        role?: string;
        avatar?: string;
        team?: string;
        status?: string;
        action?: string;
        email?: string;
      },
      columnkey: Key
    ) => {
      const cellValue = user[columnkey];

      const statusColorMap = {
        active: "success",
        paused: "danger",
        vacation: "warning",
      };
      switch (columnkey) {
        case "name":
          return (
            <User
              avatarProps={{ radius: "lg", src: user.avatar }}
              description={user.email}
              name={cellValue}
            >
              {user.name}
            </User>
          );
          break;

        case "action":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <TiEyeOutline />
                </span>
              </Tooltip>
              <Tooltip content="Edit user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <BiEdit />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <MdDeleteOutline />
                </span>
              </Tooltip>
            </div>
          );

        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[user?.status]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );

        default:
          return cellValue;
      }
    },
    []
  );

  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "ROLE",
    },
    {
      key: "status",
      label: "STATUS",
    },
    {
      key: "action",
      label: "ACTIONS",
    },
  ];

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

        <div className="lg:flex">
          <div className="lg:w-2/3 lg:pr-4">
            <Table
              aria-label="Users Action Tables"
              selectionMode="multiple"
              className="px-8 mt-5"
            >
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn
                    key={column.key}
                    align={column.key === "action" ? "center" : "start"}
                  >
                    {column.label}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={testUsers}>
                {(item) => (
                  <TableRow key={item.id}>
                    {(columnKey: Key) => (
                      <TableCell>{renderCell(item, columnKey)}</TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Second Column (Large Screen and above) */}
          <div className="lg:w-1/3 lg:pl-4">
            {/* Content for the second column */}
            <p>Column 2 Content</p>
          </div>

          {/* On Small Screens */}
          <div className="sm:block lg:hidden">
            {/* Content for small screens (stacked) */}
            <p>Content for Small Screens</p>
          </div>
        </div>
      </div>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
