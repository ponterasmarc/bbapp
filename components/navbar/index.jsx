import { Empha } from "@/components/utils/styled";

const NavBar = ({ user }) => {
  console.log(user);
  return (
    <>
      <h5>
        Hi <Empha>{user ? user.name : ""}</Empha>!
      </h5>
    </>
  );
};

export default NavBar;
