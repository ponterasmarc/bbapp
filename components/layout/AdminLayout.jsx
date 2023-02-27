import styled from "styled-components";
import Sidebar from "../sidebar";
import { getSession, signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const MainWrap = styled.main`
  width: 100%;
  padding: 30px;
`;

export const LayoutWrap = styled.div`
  display: flex;
`;

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const session = useSession();
  // if (session.status === "unauthenticated") {
  //   router.push("/error/401");
  // }
  return (
    <LayoutWrap>
      <Sidebar />
      <MainWrap>{children}</MainWrap>
    </LayoutWrap>
  );
};

export default AdminLayout;
