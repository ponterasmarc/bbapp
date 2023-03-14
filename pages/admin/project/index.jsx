import AdminLayout from "@/components/layout/AdminLayout";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import {
  AvatarSmall,
  DeleteBtn,
  FlexBtnSB,
  PageCountNav,
  Paper,
} from "@/components/utils/styled";
import { getProjects } from "@/store/actions/projectActions";
import { GET_PROJECT_RESET } from "@/store/constants/projectConstans";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@/components/loading";
import ErrorComponent from "@/components/error";
import { useRouter } from "next/router";
import { ButtonGroup, StatusWrap } from "./styled";
import ValidateStatus from "@/components/utils/ValidateStatus";

const Projects = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [filter, setFilter] = useState("");
  const [advanceSearch, setAdvanceSearch] = useState(false);

  const { loading, projects, error, count } = useSelector(
    (state) => state.getProjects
  );

  const [pageNo, setPageNo] = useState(1);
  const [size, setSize] = useState(5);

  useEffect(() => {
    dispatch(getProjects(pageNo, size));
  }, []);

  const handleFilter = (data) => {
    setFilter(data);
  };

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

  const Search = () => {
    return (
      <>
        {advanceSearch ? (
          <></>
        ) : (
          <>
            <ButtonGroup>
              <button
                className={filter == "newIndorsed" ? "active" : ""}
                onClick={() => handleFilter("newIndorsed")}
              >
                New Indorsed
              </button>
              <button
                className={filter == "ongoing" ? "active" : ""}
                onClick={() => handleFilter("ongoing")}
              >
                Ongoing
              </button>
              <button
                className={filter == "completed" ? "active" : ""}
                onClick={() => handleFilter("completed")}
              >
                Completed
              </button>
              <button
                className={filter == "oneTimeApprove" ? "active" : ""}
                onClick={() => handleFilter("oneTimeApprove")}
              >
                One Time Approve
              </button>
            </ButtonGroup>
          </>
        )}
      </>
    );
  };

  return (
    <AdminLayout>
      <h2>Projects</h2>
      <Paper>
        <Search />
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorComponent message={error} />
        ) : projects && projects.length > 0 ? (
          <>
            <table>
              <thead>
                <tr>
                  <th>Ticket Number</th>
                  <th>Task</th>
                  <th>Status</th>
                  <th>Timeline</th>
                  <th>Book</th>
                  <th>Assignee</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, key) => (
                  <tr key={key}>
                    <td>{project._id}</td>
                    <td>{project.task.name}</td>
                    <td>
                      <StatusWrap>
                        <ValidateStatus status={project.status} />{" "}
                        {project.oneTimeApprove ? <WorkspacePremiumIcon /> : ""}
                      </StatusWrap>
                    </td>
                    <td>{project.task.timeline}</td>
                    <td>{project.book.title}</td>
                    <td>
                      {project.assignee ? (
                        <>
                          <AvatarSmall src={project.assignee.image} />
                          {project.assignee.name}
                        </>
                      ) : (
                        "Unassigned"
                      )}
                    </td>
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
          <button onClick={() => router.push("project/add")}>
            Create Project
          </button>
          <Pagination />
        </FlexBtnSB>
      </Paper>
    </AdminLayout>
  );
};

export default Projects;
