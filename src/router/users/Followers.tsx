import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();
  return <h1>팔로워 {nameOfMyUser}</h1>;
}

export default Followers;
