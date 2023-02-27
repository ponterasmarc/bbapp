import { getUsers } from "@/store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import {
  Avatar,
  DeleteBtn,
  LinkAsBtn,
  PanelFlex,
} from "@/components/utils/styled";
import Loading from "@/components/loading";
import ErrorComponent from "@/components/error";

const Team = () => {
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
          <ErrorComponent message={"error message"} />
        ) : users ? (
          <>
            <h2>Team</h2>
            <table>
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, key) => (
                  <tr key={key}>
                    <td>
                      <Avatar src={user.image} alt="" />
                    </td>
                    <td>
                      {user.firstName} {user.lastName}
                    </td>
                    <td>{user.email}</td>
                    <td>
                      <LinkAsBtn href={`team/${user._id}`}>View</LinkAsBtn>
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

export default Team;
