import { Empha } from "@/components/utils/styled";
import { signOut } from "next-auth/react";

const NavBar = ({ user }) => {
  return (
    <>
      Hi <Empha>{user ? user.name : ""}</Empha>!
      <button
        onClick={(e) => {
          e.preventDefault();
          signOut();
        }}
      >
        Sign out
      </button>
    </>
  );
};

export default NavBar;
