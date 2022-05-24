import React, { useState } from "react";
import { ADD_MESSAGE } from "./index";
import { useMutation } from "@apollo/client";
function AddMessage() {
  const [formData, setFormData] = useState({
    username: "",
    body: "",
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [addMessage, { data, loading, error }] = useMutation(ADD_MESSAGE);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    try {
      addMessage({
        variables: {
          username: formData.username,
          body: formData.body,
        },
      });
    } catch (err) {
      console.log(err);
    }
    setHasSubmitted(true);
  }
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="username"
        />
        <input
          name="body"
          value={formData.body}
          onChange={handleChange}
          placeholder="enter text"
        />

        <button>Send Message</button>
      </form>
      {hasSubmitted && <p>Sent {data.createMessage.body}</p>}
    </div>
  );
}

export default AddMessage;
