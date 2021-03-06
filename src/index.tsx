import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://users-messages-gql.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

const GET_USERS = gql`
  query AllUsers {
    users {
      username
    }
  }
`;

const GET_MESSAGES_FOR_USER = gql`
  query GetUserMessages($username: ID!) {
    user(username: $username) {
      messages {
        body
      }
    }
  }
`;

const ADD_USER = gql`
  mutation AddUser($username: ID!, $first_name: String!, $last_name: String!) {
    createUser(
      username: $username
      first_name: $first_name
      last_name: $last_name
    ) {
      username
      first_name
      last_name
    }
  }
`;

const ADD_MESSAGE = gql`
  mutation AddMessage($username: ID!, $body: String!) {
    createMessage(username: $username, body: $body) {
      user {
        username
      }
      body
    }
  }
`;

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { client, GET_USERS, GET_MESSAGES_FOR_USER, ADD_USER, ADD_MESSAGE };
