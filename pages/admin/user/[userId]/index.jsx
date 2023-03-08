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

const User = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [enableEdit, setEnableEdit] = useState(false);

  const { userId } = router.query;
  const { loading, user, error } = useSelector((state) => state.getUser);

  useEffect(() => {
    if (userId && !user) {
      dispatch(getUser(userId));
    }
  }, [userId, user]);

  const toggleEdit = () => {
    enableEdit == false ? setEnableEdit(true) : setEnableEdit(false);
  };

  return (
    <AdminLayout>
      <UserView>
        {loading ? (
          <Loading />
        ) : user ? (
          <>
            <UserDetailsWrap>
              <UserImg src={user.image} />
              <FieldWrap>
                <Label>Name: </Label>
                <Data>{user.name}</Data>
              </FieldWrap>
              <FieldWrap>
                <Label>Position:</Label>
                <Data>{user.role}</Data>
              </FieldWrap>
              <FieldWrap>
                <Label>birthdate:</Label>
                <Data>{user.birthDate}</Data>
              </FieldWrap>
              <FieldWrap>
                <Label>Age:</Label>
                <Data>{user.age}</Data>
              </FieldWrap>
              <FieldWrap>
                <Label>Gender:</Label>
                <Data>{user.gender}</Data>
              </FieldWrap>
              <FieldWrap>
                <Label>Email:</Label>
                <Data>{user.email}</Data>
              </FieldWrap>
              <FieldWrap>
                <Label>Phone:</Label>
                <Data>{user.phone}</Data>
              </FieldWrap>
              <button onClick={toggleEdit}>Quick edit</button>
              <button onClick={toggleEdit}>Edit user</button>
            </UserDetailsWrap>
          </>
        ) : error ? (
          <ErrorComponent />
        ) : (
          ""
        )}
        {enableEdit ? (
          <>
            <FormWrapper>
              <FormEdit user={user} />
              <button onClick={toggleEdit}>Cancel</button>
            </FormWrapper>
          </>
        ) : (
          ""
        )}
        <PanelFlex>
          <Paper>
            <SectionTitle>Bucket</SectionTitle>
          </Paper>
        </PanelFlex>
      </UserView>
      <Paper>
        <SectionTitle>One Time Approve</SectionTitle>
      </Paper>
    </AdminLayout>
  );
};

export default User;

export const FormEdit = ({ user }) => {
  const userId = user._id;
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

  return (
    <>
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
                value={name ? name : ""}
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
                value={age ? age : ""}
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
                value={gender ? gender : ""}
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
                value={email ? email : ""}
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
                value={phone ? phone : ""}
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
                value={birthDate ? birthDate : ""}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Role</label>
            <div className="col-sm-10">
              <input
                type="text"
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
                className="form-control"
                onChange={(e) => setTeam({ teamId: e.target.value })}
                value={team ? team.teamId : ""}
              />
            </div>
          </div>
          <DeleteBtn>Delete</DeleteBtn>
          <UpdateBtn>Update</UpdateBtn>
        </Paper>
      </Form>
    </>
  );
};
