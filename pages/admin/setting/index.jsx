import AdminLayout from "@/components/layout/AdminLayout";
import { PanelFlex, SectionTitle, Paper } from "@/components/utils/styled";
import { useRouter } from "next/router";
import React from "react";

const Setting = () => {
  const router = useRouter();

  return (
    <>
      <AdminLayout>
        <PanelFlex>
          <Paper>
            <SectionTitle>Roles</SectionTitle>
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
                </tr>
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>UK</td>
                </tr>
                <tr>
                  <td>Laughing Bacchus Winecellars</td>
                  <td>Yoshi Tannamuri</td>
                  <td>Canada</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
              </tbody>
            </table>
            <button onClick={() => router.push("/admin/setting/role/add")}>
              Add new role
            </button>
          </Paper>
        </PanelFlex>
      </AdminLayout>
    </>
  );
};

export default Setting;
