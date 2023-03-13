import AdminLayout from "@/components/layout/AdminLayout";
import { AvatarSmall, Paper } from "@/components/utils/styled";
import { getAssignees } from "@/store/actions/userActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataField, FlexInput } from "./styled";

const AddProject = () => {
  const dispatch = useDispatch();
  const { assignees } = useSelector((state) => state.getAssignees);
  const [selectedAssignee, setSelectedAssignee] = useState({});
  const [selectedTask, setSelectedTask] = useState({});

  useEffect(() => {
    dispatch(getAssignees());
    // dispatch();
  }, []);

  const assigneeChange = (data) => {
    let assigneeObj = assignees.find((assignee) => {
      return assignee._id === data;
    });
    setSelectedAssignee(assigneeObj);
  };

  const taskChange = (data) => {
    if (selectedAssignee) {
      let taskObj = selectedAssignee.role.task.find((task) => {
        return task._id === data;
      });
      setSelectedTask(taskObj);
    }
  };

  return (
    <AdminLayout>
      <h2>New Project</h2>

      <Paper>
        <div className="mb-3">
          <label htmlFor="exampleDataList" className="form-label">
            Assignee
          </label>
          <FlexInput>
            <input
              className="form-control"
              list="assigneeOptions"
              placeholder="Search assignee"
              onChange={(e) => assigneeChange(e.target.value)}
            />
            <DataField>
              {selectedAssignee ? (
                <>
                  <AvatarSmall
                    className={!selectedAssignee.image ? "placeholder" : ""}
                    src={selectedAssignee ? selectedAssignee.image : ""}
                  />
                  <span>{selectedAssignee.name}</span>
                </>
              ) : (
                ""
              )}
            </DataField>
          </FlexInput>

          <datalist id="assigneeOptions">
            {assignees
              ? assignees.map((assignee, key) => (
                  <option
                    key={key}
                    value={assignee._id}
                    label={assignee.name}
                  />
                ))
              : ""}
          </datalist>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleDataList" className="form-label">
            Task
          </label>

          <FlexInput>
            <input
              className="form-control"
              list="taskOptions"
              placeholder="Search task"
              onChange={(e) => taskChange(e.target.value)}
            />
            <DataField>
              {selectedTask ? (
                <>
                  <span>{selectedTask.name}</span>
                </>
              ) : (
                ""
              )}
            </DataField>
          </FlexInput>
          <datalist id="taskOptions">
            {selectedAssignee &&
            selectedAssignee.role &&
            selectedAssignee.role.task
              ? selectedAssignee.role.task.map((task, key) => (
                  <option key={key} value={task._id} label={task.name} />
                ))
              : ""}
          </datalist>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleDataList" className="form-label">
            Book
          </label>
          <FlexInput>
            <input
              className="form-control"
              list="bookOptions"
              placeholder="Search assignee"
              onChange={(e) => assigneeChange(e.target.value)}
            />
            <DataField>
              {selectedAssignee ? (
                <>
                  <AvatarSmall
                    className={!selectedAssignee.image ? "placeholder" : ""}
                    src={selectedAssignee ? selectedAssignee.image : ""}
                  />
                  <span>{selectedAssignee.name}</span>
                </>
              ) : (
                ""
              )}
            </DataField>
          </FlexInput>

          <datalist id="bookOptions">
            {assignees
              ? assignees.map((assignee, key) => (
                  <option
                    key={key}
                    value={assignee._id}
                    label={assignee.name}
                  />
                ))
              : ""}
          </datalist>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Notes
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </Paper>
    </AdminLayout>
  );
};

export default AddProject;
