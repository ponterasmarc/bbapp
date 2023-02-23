import styled from "styled-components";
import Sidebar from "../sidebar";
import { getSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export const MainWrap = styled.main`
  width: 100%;
  padding: 30px;
`;

export const LayoutWrap = styled.div`
  display: flex;
`;

const AdminLayout = ({ children }) => {
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();

      console.log(session);
      if (!session) {
        signIn();
      }
    };
    securePage();
  }, []);

  return (
    <LayoutWrap>
      <Sidebar />
      <MainWrap>{children}</MainWrap>
    </LayoutWrap>
  );
};

export default AdminLayout;
