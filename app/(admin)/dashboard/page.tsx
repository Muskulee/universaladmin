"use client";

import Layout from "./../layout";
import {
  useEffect,
  type ReactElement,
  useCallback,
  Key,
  useState,
  useMemo,
} from "react";
import { TiEyeOutline } from "react-icons/ti";
import { MdDeleteOutline, MdOutlineShowChart } from "react-icons/md";
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
  Button,
  Pagination,
} from "@nextui-org/react";

import DashCard from "@/app/_lib/smalls/DashCard";
import { BiEdit, BiMailSend } from "react-icons/bi";
import {
  testUsers,
  testTransactions,
  transactionColumns,
  columns,
} from "./../../_lib/api/fakeData";

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
  transactions: Array;
  statusColorMap?: { [key: string]: string };
};

const Dashboard = ({ users, transactions }: DashBoardProps): ReactElement => {
  const [selectedKeys, setSelectedKeys]: [
    Set<number>,
    Dispatch<SetStateAction<Set<number>>>
  ] = useState(new Set());
  const [selectedTransactions, setSelectedTransactions]: [
    Set<number>,
    Dispatch<SetStateAction<Set<number>>>
  ] = useState(new Set());
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(testTransactions.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return testTransactions.slice(start, end);
  }, [page, testTransactions]);

  useEffect(() => {
    // Rewrite logic

    console.log("selectedKeys", selectedKeys);
    console.log("selectedTransactions", selectedTransactions);
  }, [selectedKeys, selectedTransactions]);

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
  const renderTransaction = useCallback(
    (
      transaction: {
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
      const cellValue = transaction[columnkey];

      const statusColorMap = {
        active: "success",
        paused: "danger",
        vacation: "warning",
      };
      switch (columnkey) {
        case "name":
          return (
            <User
              avatarProps={{ radius: "lg", src: transaction.avatar }}
              description={transaction.email}
              name={cellValue}
            >
              {transaction.name}
            </User>
          );

        case "action":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <TiEyeOutline />
                </span>
              </Tooltip>
              <Tooltip content="Edit transaction">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <BiEdit />
                </span>
              </Tooltip>
              <Tooltip color="primary" content="Send mail">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <BiMailSend />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete transaction">
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
              color={statusColorMap[transaction?.status]}
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

        <div className="lg:flex lg:space-x-1">
          {/* // Users Table */}
          <div className="lg:w-2/3 ">
            <Table
              aria-label="Users Action Tables"
              selectionMode="multiple"
              className="px-8 mt-5"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
              isHeaderSticky
              bottomContent={
                <div className="flex w-full justify-center">
                  <Button
                    // isDisabled={list.isLoading}
                    variant="flat"
                    onPress={() => {
                      // loadMoreFunction
                    }}
                  >
                    {/* {list.isLoading && <Spinner color="white" size="sm" />} */}
                    Load More
                  </Button>
                </div>
              }
              // classNames={{
              //   base: "max-h-[520px] overflow-scroll",
              //   table: "min-h-[420px]",
              // }}
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
          <div className="lg:w-1/3 ">
            {/* Transactions Table for the second column */}
            <Table
              aria-label="Transactions Action Tables"
              selectionMode="multiple"
              className="px-8 lg:mt-5"
              selectedKeys={selectedTransactions}
              onSelectionChange={setSelectedTransactions}
              isHeaderSticky
              bottomContent={
                <div className="flex w-full justify-center">
                  <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="secondary"
                    page={page}
                    total={pages}
                    onChange={(page) => setPage(page)}
                  />
                </div>
              }
              classNames={{
                wrapper: "min-h-[222px]",
              }}
            >
              <TableHeader columns={transactionColumns}>
                {(column) => (
                  <TableColumn
                    key={column.key}
                    align={column.key === "action" ? "center" : "start"}
                  >
                    {column.label}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={items}>
                {(item) => (
                  <TableRow key={item.key}>
                    {(columnKey: Key) => (
                      <TableCell>
                        {renderTransaction(item, columnKey)}
                      </TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
        {/* On Small Screens */}
        <div className="sm:block lg:hidden">
          {/* Content for small screens (stacked) */}
          <p>Content for Small Screens</p>
        </div>
      </div>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
