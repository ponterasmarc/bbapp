import AdminLayout from "@/components/layout/AdminLayout";
import Error from "@/components/error";
import {
  PanelFlex,
  SectionTitle,
  Paper,
  AvatarSmall,
  LinkAsBtn,
  DeleteBtn,
  Table,
} from "@/components/utils/styled";
import { getImprints } from "@/store/actions/imprintActions";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Setting = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, imprints, error } = useSelector(
    (state) => state.getImprints
  );
  useEffect(() => {
    dispatch(getImprints());
  }, []);

  const ImprintsSummary = () => {
    return (
      <Paper>
        <SectionTitle>Imprints</SectionTitle>
        {imprints ? (
          <Table>
            <thead>
              <tr>
                <th>Logo</th>
                <th>Name</th>
                <th>Url</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {imprints.map((imprint, key) => (
                <tr key={key}>
                  <td>
                    <AvatarSmall src={imprint.logo} alt="" />
                  </td>
                  <td>{imprint.name}</td>
                  <td>{imprint.url}</td>
                  <td>
                    <LinkAsBtn href={`setting/${imprint._id}`}>View</LinkAsBtn>
                    <DeleteBtn>Delete</DeleteBtn>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <Error />
        )}
        <button onClick={() => router.push("/admin/setting/role/add")}>
          Add new imprint
        </button>
      </Paper>
    );
  };

  const RolesSummary = () => {
    return (
      <Paper>
        <SectionTitle>Roles</SectionTitle>
        {imprints ? (
          <Table>
            <thead>
              <tr>
                <th>Logo</th>
                <th>Name</th>
                <th>Url</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {imprints.map((imprint, key) => (
                <tr key={key}>
                  <td>
                    <AvatarSmall src={imprint.logo} alt="" />
                  </td>
                  <td>{imprint.name}</td>
                  <td>{imprint.url}</td>
                  <td>
                    <LinkAsBtn href={`setting/${imprint._id}`}>View</LinkAsBtn>
                    <DeleteBtn>Delete</DeleteBtn>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <Error />
        )}
        <button onClick={() => router.push("/admin/setting/role/add")}>
          Add new imprint
        </button>
      </Paper>
    );
  };
  return (
    <>
      <AdminLayout>
        <h2>Settings</h2>
        <PanelFlex>
          <ImprintsSummary />
          <RolesSummary />
        </PanelFlex>
      </AdminLayout>
    </>
  );
};

export default Setting;
