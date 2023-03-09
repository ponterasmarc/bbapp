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
import { getRoles } from "@/store/actions/roleActions";

const Setting = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, imprints, error } = useSelector(
    (state) => state.getImprints
  );
  const {
    loading: loadingRoles,
    roles,
    error: errorRoles,
  } = useSelector((state) => state.getRoles);
  useEffect(() => {
    dispatch(getImprints());
    dispatch(getRoles());
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
          Create imprint
        </button>
      </Paper>
    );
  };

  const RolesSummary = () => {
    return (
      <Paper>
        <SectionTitle>Roles</SectionTitle>
        {roles ? (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role, key) => (
                <tr key={key}>
                  <td>{role.name}</td>
                  <td>
                    <LinkAsBtn href={`setting/${role._id}`}>View</LinkAsBtn>
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
          Create role
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
