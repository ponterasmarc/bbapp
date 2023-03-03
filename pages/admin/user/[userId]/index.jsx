import AdminLayout from "@/components/layout/AdminLayout";
import { getUser } from "@/store/actions/userActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { UpdateBtn } from "@/components/utils/styled";
import Loading from "@/components/loading";
import ErrorComponent from "@/components/error";

const User = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [disable, setDisable] = useState(true);

  const { userId } = router.query;
  const { loading, user, error } = useSelector((state) => state.getUser);
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
    console.log(updateUser);
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
                value={name}
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
                value={age}
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
                value={gender}
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
                value={email}
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
                value={phone}
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
                value={birthDate}
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
                value={role}
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
                value={team.teamId}
              />
            </div>
          </div>
          {disable ? (
            <button onClick={toggleEdit}>Edit user</button>
          ) : (
            <>
              <UpdateBtn onClick={updateHandler}>Update user</UpdateBtn>
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
