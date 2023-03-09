import AdminLayout from "@/components/layout/AdminLayout";
import { DeleteBtn, FlexBtnSB, PageCountNav } from "@/components/utils/styled";
import { getProjects } from "@/store/actions/projectActions";
import { GET_PROJECT_RESET } from "@/store/constants/projectConstans";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@/components/loading";

const Projects = () => {
  const dispatch = useDispatch();

  const { loading, projects, error, count } = useSelector(
    (state) => state.getProjects
  );

  const [pageNo, setPageNo] = useState(1);
  const [size, setSize] = useState(5);

  useEffect(() => {
    dispatch(getProjects(pageNo, size));
  }, []);

  //Pagination
  const Pagination = () => {
    let pageCount = Math.ceil(count / size);

    const pagePrev = () => {
      setPageNo(pageNo - 1);
      dispatch(getProjects(pageNo - 1, size));
    };
    const pageNext = () => {
      setPageNo(pageNo + 1);
      dispatch(getProjects(pageNo + 1, size));
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
      <h2>Projects</h2>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorComponent message={error} />
      ) : projects && projects.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Timeline</th>
                <th>Book</th>
                <th>Assignee</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, key) => (
                <tr key={key}>
                  <td>{project.task.name}</td>
                  <td>{project.task.timeline}</td>
                  <td>{project.book.title}</td>
                  <td>{project.assignee.name}</td>
                  <td>{project.status}</td>
                  <td>
                    <button
                      onClick={() => {
                        router.push(`project/${project._id}`);
                        dispatch({
                          type: GET_PROJECT_RESET,
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
        <button>Create Book</button>
        <Pagination />
      </FlexBtnSB>
    </AdminLayout>
  );
};

export default Projects;
