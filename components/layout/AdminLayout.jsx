import styled from "styled-components";
import Sidebar from "../sidebar";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NavBar from "../navbar";
import { signedInUser } from "@/store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

export const MainWrap = styled.main`
  width: 100%;
  padding: 30px;
  position: relative;
`;

export const LayoutWrap = styled.div`
  display: flex;
`;

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  var session = "";

  const {
    // loading,
    signedInUser: user,
    // error,
  } = useSelector((state) => state.signedInUser);

  useEffect(() => {
    const securePage = async () => {
      session = await getSession();
      if (!session) {
        router.push("/login");
      }
    };
    securePage();
  }, []);

  useEffect(() => {
    if (!user && session) {
      dispatch(signedInUser(session.user.email));
    }
  }, [user]);

  return (
    <LayoutWrap>
      <Sidebar />
      <MainWrap>
        {/* <NavBar user={user ? user : ""} /> */}
        {children}
      </MainWrap>
    </LayoutWrap>
  );
};

export default AdminLayout;
