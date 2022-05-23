import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import './App.css';
import UsersList from "./UsersList.js";
import GetMessages from "./GetMessages";

function App() {
  return (
    <>
      {/* <UsersList /> */}
      <GetMessages />
    </>
  );
}

export default App;
