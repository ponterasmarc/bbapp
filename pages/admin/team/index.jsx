import axios from "axios";

const Team = ({ users }) => {
  return <>{users.map((user) => users(<li>{user._id}</li>))}</>;
};

export default Team;

export const getServerSideProps = async () => {
  const data = await axios.get(`api/user`);

  return {
    props: {
      users: data,
    },
  };
};
