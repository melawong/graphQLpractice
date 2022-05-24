import { useQuery } from "@apollo/client";
import { useAllUsersQuery } from "./graphql/generated.ts";

function UsersList() {
  const { data } = useAllUsersQuery();

  return data.users.map(({ username }) => (
    <div key={username}>
      <p>{username}</p>
    </div>
  ));
}

export default UsersList;
