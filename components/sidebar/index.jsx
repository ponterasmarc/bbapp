import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Ul, SidebarWrap, Logo, SubMenu } from "./styled";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";

const Sidebar = () => {
  const [location, setLocation] = useState();
  const router = useRouter();

  useEffect(() => {
    setLocation(router.pathname);
  }, [router]);

  const logoLight = "/assets/images/logo-prim.png";
  const logoDark = "/assets/images/logo-alter.png";

  return (
    <SidebarWrap>
      <Logo>
        <img src={logoLight} alt="" />
        <span>The Logo</span>
      </Logo>
      <Ul>
        <li>
          <Link
            href="/admin/dashboard"
            className={`${location === "/admin/dashboard" ? "active" : ""}`}
          >
            <DashboardOutlinedIcon />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/book"
            className={`${location === "/admin/book" ? "active" : ""}`}
          >
            <AutoStoriesOutlinedIcon />
            <span>Books</span>
          </Link>
          {/* {location === "/admin/book" ? (
            <SubMenu>
              <li>
                <Link href="/admin/">
                  <span>Add new</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/">
                  <span>By author</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/">
                  <span>Add</span>
                </Link>
              </li>
            </SubMenu>
          ) : (
            ""
          )} */}
        </li>
        <li>
          <Link
            href="/admin/project"
            className={`${location === "/admin/project" ? "active" : ""}`}
          >
            <AssignmentOutlinedIcon />
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/team"
            className={`${location === "/admin/team" ? "active" : ""}`}
          >
            <Groups2OutlinedIcon />
            <span>Team</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/setting"
            className={`${location === "/admin/setting" ? "active" : ""}`}
          >
            <SettingsOutlinedIcon />
            <span>Settings</span>
          </Link>
          {location === "/admin/setting" ? (
            <SubMenu>
              <li>
                <Link href="/admin/setting/role">
                  <span>Role</span>
                </Link>
              </li>
            </SubMenu>
          ) : (
            ""
          )}
        </li>
      </Ul>
    </SidebarWrap>
  );
};

export default Sidebar;
