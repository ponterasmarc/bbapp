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
  Paper,
  PanelFlex,
  SectionTitle,
} from "@/components/utils/styled";
import Loading from "@/components/loading";
import ErrorComponent from "@/components/error";
import SuccessDeleteFull from "@/components/alert/SuccessDeleteFull";
import {
  UserImg,
  UserDetailsWrap,
  UserView,
  FieldWrap,
  Label,
  Data,
  FormWrapper,
  Form,
} from "./styled";
import {
  DELETE_USER_RESET,
  GET_USERS_RESET,
} from "@/store/constants/userConstants";
import { getRoles } from "@/store/actions/roleActions";
import { getTeams } from "@/store/actions/teamActions";

const FormEdit = () => {
  const router = useRouter();
  const dispatch = useDispatch();
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

  const { roles } = useSelector((state) => state.getRoles);
  const { teams } = useSelector((state) => state.getTeams);
  const { userId } = router.query;

  useEffect(() => {
    dispatch(getRoles());
    dispatch(getTeams());
  }, []);

  useEffect(() => {
    if (userId && !user) {
      dispatch(getUser(userId));
    }
  }, [userId, user]);

  useEffect(() => {
    if (user && !email) {
      setName(user.name ? user.name : "none");
      setAge(user.age ? user.age : "none");
      setGender(user.gender ? user.gender : "none");
      setEmail(user.email ? user.email : "none");
      setPhone(user.phone ? user.phone : "none");
      setBirthDate(user.birthDate ? user.birthDate : "none");
      setImage(user.image ? user.image : "none");
      setRole(user.role ? user.role._id : "none");
      setIsAdmin(user.isAdmin ? user.isAdmin : "none");
      setTeam(user.team ? user.team._id : "none");
    }
  }, [user]);

  const updateHandler = (e) => {
    e.preventDefault();
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
  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteUser(userId));
  };

  return (
    <AdminLayout>
      <Form>
        <Paper>
          <UserImg src={image} />
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Age</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Gender</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Phone</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Birthdate</label>
            <div className="col-sm-10">
              <input
                type="date"
                className="form-control"
                onChange={(e) => setBirthDate(e.target.value)}
                value={birthDate}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Position</label>
            <div className="col-sm-10">
              <select
                className="form-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Unassigned</option>
                {roles
                  ? roles.map((role, key) => (
                      <option key={key} value={role._id}>
                        {role.name}
                      </option>
                    ))
                  : ""}
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Team</label>
            <div className="col-sm-10">
              <select
                className="form-select"
                onChange={(e) => setTeam(e.target.value)}
                value={team ? team : ""}
              >
                <option value="">Unassigned</option>
                {teams
                  ? teams.map((team, key) => (
                      <option key={key} value={team._id}>
                        {team.name}
                      </option>
                    ))
                  : ""}
              </select>
            </div>
          </div>
          {errorPutUser ? (
            <AlertError>{errorPutUser}</AlertError>
          ) : errorDeleteUser ? (
            <AlertError>{errorDeleteUser}</AlertError>
          ) : successPutUser ? (
            <AlertSuccess>User updated successfully!</AlertSuccess>
          ) : successDeleteUser ? (
            <SuccessDeleteFull
              message={"User deleted successfully!"}
              fallbackUrl={`/admin/user/`}
              reset={(GET_USERS_RESET, DELETE_USER_RESET)}
            />
          ) : (
            ""
          )}
          <DeleteBtn onClick={deleteHandler}>Delete</DeleteBtn>
          <UpdateBtn onClick={updateHandler}>Update</UpdateBtn>
        </Paper>
      </Form>
    </AdminLayout>
  );
};

export default FormEdit;
