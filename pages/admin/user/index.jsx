import ErrorComponent from "@/components/error";
import AdminLayout from "@/components/layout/AdminLayout";
import Loading from "@/components/loading";
import {
  AvatarSmall,
  DeleteBtn,
  PageCountNav,
  PanelFlex,
} from "@/components/utils/styled";
import { getUsers } from "@/store/actions/userActions";
import { GET_USER_RESET } from "@/store/constants/userConstants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlexBtnSB } from "@/components/utils/styled";

const Users = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, users, count, error } = useSelector(
    (state) => state.getUsers
  );

  const [pageNo, setPageNo] = useState(1);
  const [size, setSize] = useState(5);

  useEffect(() => {
    dispatch(getUsers(pageNo, size));
  }, []);

  //Pagination
  const Pagination = () => {
    let pageCount = Math.ceil(count / size);

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
      <h2>Users</h2>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorComponent message={error} />
      ) : users ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, key) => (
                <tr key={key}>
                  <td>
                    <AvatarSmall src={user.image} />
                    {user.name}
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        router.push(`user/${user._id}`);
                        dispatch({
                          type: GET_USER_RESET,
                        });
                      }}
                    >
                      View
                    </button>
                    <DeleteBtn>Delete</DeleteBtn>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        "There was no data available to retrieve."
      )}
      <FlexBtnSB>
        <button>Create User</button>
        <Pagination />
      </FlexBtnSB>
    </AdminLayout>
  );
};

export default Users;
