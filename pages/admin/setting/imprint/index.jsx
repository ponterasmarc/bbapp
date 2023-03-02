import AdminLayout from "@/components/layout/AdminLayout";
import Loading from "@/components/loading";
import Error from "@/components/error";
import { getImprints } from "@/store/actions/imprintActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, DeleteBtn, LinkAsBtn } from "@/components/utils/styled";

const Imprints = () => {
  const dispatch = useDispatch();
  const { loading, imprints, error } = useSelector(
    (state) => state.getImprints
  );
  console.log(imprints);
  useEffect(() => {
    dispatch(getImprints());
  }, []);

  return (
    <AdminLayout>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : imprints ? (
        <>
          <h2>Imprint</h2>
          <table>
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
                    <Avatar src={imprint.logo} alt="" />
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
          </table>
        </>
      ) : (
        ""
      )}
    </AdminLayout>
  );
};

export default Imprints;
