import { Ul } from "./styled";
import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Sidebar = () => {
  return (
    <>
      <Ul>
        <li>
          <Link href="/">
            <DashboardIcon />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <DashboardIcon />
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link href="/user">
            <DashboardIcon />
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link href="/book">
            <DashboardIcon />
            <span>Books</span>
          </Link>
        </li>
        <li>
          <Link href="/tool">
            <DashboardIcon />
            <span>Tools</span>
          </Link>
        </li>
        <li>
          <Link href="/setting">
            <DashboardIcon />
            <span>Settings</span>
          </Link>
        </li>
      </Ul>
    </>
  );
};

export default Sidebar;
