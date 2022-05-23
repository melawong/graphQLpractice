import { useQuery } from "@apollo/client";
import { GET_MESSAGES_FOR_USER } from "./index";

function Messages({ username }) {
  const { loading, error, data } = useQuery(GET_MESSAGES_FOR_USER, {
    variables: { username },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error} </p>;

  return data.user.messages.map((message) => (
    <div key={message.body}>
      <p>
        {message.body}
      </p>
    </div>
  ));
}

export default Messages;