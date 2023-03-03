import { getTeams } from "@/store/actions/teamActions";
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
  const { loading, teams, error } = useSelector((state) => state.getTeams);
  useEffect(() => {
    dispatch(getTeams());
  }, []);

  return (
    <AdminLayout>
      <PanelFlex>
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorComponent message={error} />
        ) : teams ? (
          <>
            <h2>Teams</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((user, key) => (
                  <tr key={key}>
                    <td>{user.name}</td>
                    <td>{user.description}</td>
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
