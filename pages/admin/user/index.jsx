import ErrorComponent from "@/components/error";
import AdminLayout from "@/components/layout/AdminLayout";
import Loading from "@/components/loading";
import {
  Avatar,
  DeleteBtn,
  LinkAsBtn,
  PanelFlex,
} from "@/components/utils/styled";
import { getUsers } from "@/store/actions/userActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.getUsers);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <AdminLayout>
      <PanelFlex>
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorComponent message={error} />
        ) : users ? (
          <>
            <h2>Users</h2>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, key) => (
                  <tr key={key}>
                    <td>
                      <Avatar src={user.image} />
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <LinkAsBtn href={`user/${user._id}`}>View</LinkAsBtn>
                      <DeleteBtn>Delete</DeleteBtn>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          ""
        )}
      </PanelFlex>
    </AdminLayout>
  );
};

export default Users;
