import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import Link from "next/link";
import {
  Ul,
  SidebarWrap,
  Logo,
  SubMenu,
  UserWrap,
  UserImage,
  UserName,
  UserPosition,
  SignOut,
} from "./styled";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AssignmentIcon from "@mui/icons-material/Assignment";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SettingsIcon from "@mui/icons-material/Settings";

import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import Groups2Icon from "@mui/icons-material/Groups2";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PersonIcon from "@mui/icons-material/Person";

import { useDispatch, useSelector } from "react-redux";
import { signedInUser } from "@/store/actions/userActions";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  const [location, setLocation] = useState();
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    // loading,
    signedInUser: user,
    // error,
  } = useSelector((state) => state.signedInUser);

  useEffect(() => {
    setLocation(router.pathname);
  }, [router]);

  useEffect(() => {
    if (!user) {
      dispatch(signedInUser());
    }
  }, [user]);

  const logo = "/assets/images/logo-prim.png";

  return (
    <SidebarWrap>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
      <UserWrap>
        <UserImage
          className={!user ? "placeholder" : ""}
          src={user ? user.image : ""}
        />
        <UserName>{user ? user.name : ""}</UserName>
        <UserPosition>{user ? user.role.name : ""}</UserPosition>
      </UserWrap>
      <Ul>
        <li>
          <Link
            href="/admin/dashboard"
            className={`${location === "/admin/dashboard" ? "active" : ""}`}
          >
            {location === "/admin/dashboard" ? (
              <DashboardIcon />
            ) : (
              <DashboardOutlinedIcon />
            )}

            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/book"
            className={`${location === "/admin/book" ? "active" : ""}`}
          >
            {location === "/admin/book" ? (
              <AutoStoriesIcon />
            ) : (
              <AutoStoriesOutlinedIcon />
            )}

            <span>Books</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/project"
            className={`${location === "/admin/project" ? "active" : ""}`}
          >
            {location === "/admin/project" ? (
              <AssignmentIcon />
            ) : (
              <AssignmentOutlinedIcon />
            )}
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/user"
            className={`${location === "/admin/user" ? "active" : ""}`}
          >
            {location === "/admin/user" ? (
              <PersonIcon />
            ) : (
              <PersonOutlinedIcon />
            )}

            <span>User</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/team"
            className={`${location === "/admin/team" ? "active" : ""}`}
          >
            {location === "/admin/team" ? (
              <Groups2Icon />
            ) : (
              <Groups2OutlinedIcon />
            )}

            <span>Team</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/setting"
            className={`${location === "/admin/setting" ? "active" : ""}`}
          >
            {location === "/admin/setting" ? (
              <SettingsIcon />
            ) : (
              <SettingsOutlinedIcon />
            )}

            <span>Settings</span>
          </Link>
          {location === "/admin/setting" ? (
            <SubMenu>
              <li>
                <Link href="/admin/setting/role">
                  <span>Role</span>
                </Link>
                <Link href="/admin/setting/role">
                  <span>Account Setting</span>
                </Link>
              </li>
            </SubMenu>
          ) : (
            ""
          )}
        </li>
      </Ul>
      <SignOut onClick={() => signOut()}>
        <LogoutIcon /> Sign out
      </SignOut>
    </SidebarWrap>
  );
};

export default Sidebar;
