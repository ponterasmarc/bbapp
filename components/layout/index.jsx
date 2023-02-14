import React from "react";
import Sidebar from "../sidebar";
import { LayoutWrap, ContentWrapper } from "./styled";

const Layout = ({ children }) => {
  return (
    <LayoutWrap>
      <Sidebar />
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrap>
  );
};

export default Layout;
