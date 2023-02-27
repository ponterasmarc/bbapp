import AdminLayout from "@/components/layout/AdminLayout";
import { getUser } from "@/store/actions/userActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const Member = () => {
  const router = useRouter();
  const { tid } = router.query;

  console.log(tid);
  //   const [disable, setDisable] = useState(false);
  //   const dispatch = useDispatch();
  //   const { loading, user, error } = useSelector((state) => state.getUser);

  //   useEffect(() => {
  //     dispatch(getUser());
  //   }, []);

  return (
    <AdminLayout>
      {/* <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">First name</label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly={disable}
            className="form-control"
            id="staticEmail"
            value=""
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Maiden name</label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly={disable}
            className="form-control"
            id="staticEmail"
            value=""
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Last name</label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly={disable}
            className="form-control"
            id="staticEmail"
            value=""
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Birthdate</label>
        <div className="col-sm-10">
          <input
            type="date"
            readOnly={disable}
            className="form-control"
            id="staticEmail"
            value="2000-12-25"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly={disable}
            className="form-control"
            id="staticEmail"
            value="email@example.com"
          />
        </div>
      </div> */}
    </AdminLayout>
  );
};

export default Member;
