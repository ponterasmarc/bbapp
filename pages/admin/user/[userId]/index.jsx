import AdminLayout from "@/components/layout/AdminLayout";
import { deleteUser, getUser, putUser } from "@/store/actions/userActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  AlertError,
  AlertSuccess,
  DeleteBtn,
  UpdateBtn,
} from "@/components/utils/styled";
import Loading from "@/components/loading";
import ErrorComponent from "@/components/error";
import SuccessDeleteFull from "@/components/alert/SuccessDeleteFull";

const User = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [disable, setDisable] = useState(true);
  // const [btnDisable, setBtnDisable] = useState(false);

  const { userId } = router.query;
  const { loading, user, error } = useSelector((state) => state.getUser);

  const {
    loading: loadingPutUser,
    success: successPutUser,
    error: errorPutUser,
  } = useSelector((state) => state.putUser);

  const {
    loading: loadingDeleteUser,
    success: successDeleteUser,
    error: errorDeleteUser,
  } = useSelector((state) => state.deleteUser);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [team, setTeam] = useState({
    teamId: "",
  }); //isLeader , teamId

  useEffect(() => {
    if (userId && !user) {
      dispatch(getUser(userId));
    }
  }, [userId, user]);

  const toggleEdit = () => {
    setDisable(false);
  };
  const updateHandler = () => {
    const updateUser = {
      name,
      age,
      gender,
      email,
      phone,
      birthDate,
      image,
      role,
      team,
    };
    dispatch(putUser(userId, updateUser));
  };
  const deleteHandler = () => {
    dispatch(deleteUser(userId));
  };

  useEffect(() => {
    if (user && !email) {
      setName(user.name);
      setAge(user.age);
      setGender(user.gender);
      setEmail(user.email);
      setPhone(user.phone);
      setBirthDate(user.birthDate);
      setImage(user.image);
      setRole(user.role);
      setIsAdmin(user.isAdmin);
      setTeam(user.team);
    }
  }, [user, email]);
  return (
    <AdminLayout>
      {loading ? (
        <Loading />
      ) : user ? (
        <>
          <img src={image} alt="" />
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly={disable}
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name ? name : ""}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Age</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly={disable}
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
                value={age ? age : ""}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Gender</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly={disable}
                className="form-control"
                onChange={(e) => setGender(e.target.value)}
                value={gender ? gender : ""}
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
                onChange={(e) => setEmail(e.target.value)}
                value={email ? email : ""}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Phone</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly={disable}
                className="form-control"
                onChange={(e) => setPhone(e.target.value)}
                value={phone ? phone : ""}
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
                onChange={(e) => setBirthDate(e.target.value)}
                value={birthDate ? birthDate : ""}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Role</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly={disable}
                className="form-control"
                onChange={(e) => setRole(e.target.value)}
                value={role ? role : ""}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Team</label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly={disable}
                className="form-control"
                onChange={(e) => setTeam({ teamId: e.target.value })}
                value={team ? team.teamId : ""}
              />
            </div>
          </div>
          {disable ? (
            <button onClick={toggleEdit}>Edit user</button>
          ) : (
            <>
              {successPutUser ? (
                <AlertSuccess>User updated successfully!</AlertSuccess>
              ) : errorPutUser ? (
                <AlertError>{error}</AlertError>
              ) : errorDeleteUser ? (
                <AlertError>{errorPutUser}</AlertError>
              ) : successDeleteUser ? (
                <SuccessDeleteFull
                  message={"User deleted successfully!"}
                  fallbackUrl={"/admin/user"}
                />
              ) : (
                ""
              )}

              <DeleteBtn onClick={deleteHandler}>Delete</DeleteBtn>
              <UpdateBtn
                onClick={updateHandler}
                disabled={loadingPutUser ? true : false}
              >
                {loadingPutUser ? "Processing ... " : "Update"}
              </UpdateBtn>
            </>
          )}
        </>
      ) : error ? (
        <ErrorComponent />
      ) : (
        ""
      )}
    </AdminLayout>
  );
};

export default User;
