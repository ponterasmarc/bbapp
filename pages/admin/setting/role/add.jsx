import AdminLayout from "@/components/layout/AdminLayout";
import { SaveBtn } from "@/components/utils/styled";
import React from "react";

const AddRole = () => {
  return (
    <AdminLayout>
      <h2>Add new role</h2>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">
          Role
        </label>
        <input
          type="test"
          className="form-control"
          id="role"
          placeholder="Writter"
        />
      </div>
      <div className="mb-3">
        <label for="roleDescription" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="roleDescription"
          rows="3"
        ></textarea>
      </div>
      <SaveBtn>Save</SaveBtn>
    </AdminLayout>
  );
};

export default AddRole;
