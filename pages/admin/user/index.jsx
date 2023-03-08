import ErrorComponent from "@/components/error";
import AdminLayout from "@/components/layout/AdminLayout";
import Loading from "@/components/loading";
// import Pagination from "@/components/pagination";
import {
  Avatar,
  DeleteBtn,
  LinkAsBtn,
  PageCountNav,
  PanelFlex,
} from "@/components/utils/styled";
import { getUsers } from "@/store/actions/userActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  const dispatch = useDispatch();
  const { loading, users, entries, error } = useSelector(
    (state) => state.getUsers
  );
  const [pageNo, setPageNo] = useState(1);
  const [size, setSize] = useState(5);

  useEffect(() => {
    dispatch(getUsers(pageNo, size));
  }, []);

  //Paginations
  const Pagination = () => {
    let pageCount = entries / size;

    const pagePrev = () => {
      setPageNo(pageNo - 1);
      dispatch(getUsers(pageNo - 1, size));
    };
    const pageNext = () => {
      setPageNo(pageNo + 1);
      dispatch(getUsers(pageNo + 1, size));
    };
    return (
      <PageCountNav>
        <button onClick={pagePrev} disabled={pageNo == 1 ? true : false}>
          ◄
        </button>
        <span>
          {pageNo}/{pageCount}
        </span>
        <button
          disabled={pageNo === pageCount ? true : false}
          onClick={pageNext}
        >
          ►
        </button>
      </PageCountNav>
    );
  };

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
            <Pagination />
          </>
        ) : (
          ""
        )}
      </PanelFlex>
    </AdminLayout>
  );
};

export default Users;
