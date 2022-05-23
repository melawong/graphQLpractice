import {
  useQuery,
} from "@apollo/client";
import { GET_USERS } from "./index.js";

function UsersList() {

  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error} </p>;

  return data.users.map(({ username }) => (
    <div key={username}>
      <p>
        {username}
      </p>
    </div>
  ));
}

export default UsersList;