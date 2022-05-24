import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import "./App.css";
import UsersList from "./UsersList";
import GetMessages from "./GetMessages";
import AddMessage from "./AddMessage";
import AddUser from "./AddUser";

function App() {
  return (
    <>
      <UsersList />
      {/* <GetMessages /> */}
      {/* <AddUser /> */}
      {/* <AddMessage /> */}
    </>
  );
}

export default App;
