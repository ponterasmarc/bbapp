import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

import AdminLayout from "@/components/layout/AdminLayout";
import { Paper, PanelFlex, Table } from "@/components/utils/styled";

const Dashboard = () => {
  return (
    <AdminLayout>
      <PanelFlex></PanelFlex>
    </AdminLayout>
  );
};

export default Dashboard;
