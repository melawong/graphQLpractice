import { React, useState } from "react";
import Messages from "./Messages";


function GetMessages() {
  const [username, setUsername] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function handleChange(evt) {
    const { value } = evt.target;
    setUsername((username) => value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setHasSubmitted(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name={username}
          value={username}
          placeholder="Enter username..."
          onChange={handleChange} />
        <button>Find User's Messages!</button>
      </form>
      {hasSubmitted && <Messages username={username} />}
    </>
  );
}

export default GetMessages;