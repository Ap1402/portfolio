import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  width: 100%;
  label {
    font-weight: 500;
  }
  input,
  textarea {
    border: 2px solid gray;
    margin-top:1rem;
    margin-bottom: 1rem;
    box-shadow: 0 0 15px rgba(226, 171, 236, 0.89);
    border-radius: 0.25rem;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border: none;
    outline: none;
    ::placeholder {
      font-size: 1rem;
      font-family: "Rambla";
    }
  }
  textarea {
    font-size: 1.1rem;
    font-family: "Rambla";
    resize: vertical;
  }
  input:focus{
    box-shadow: 0 0 15px rgba(200, 84, 221, 0.89);

  }
  textarea:focus{
    box-shadow: 0 0 15px rgba(200, 84, 221, 0.89);
  }
  
  button {
    font-weight: bold;
    background-color: #563270;
    border: 1px solid black;
    border-radius: 4px;
    padding: 0.5rem 0.5rem;
    color: white;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #9300fc;
      color:white;
      transform: translateY(-3px);
      box-shadow: 5px 5px 10px rgba(0, 50, 50, 0.5);
    }
  }


  @media screen and (max-width: 850px) {
    margin: auto;
    width: 80%;
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const Form = (props) => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });

      setInputs({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/xzbjwqgn",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, "Thank you for your message!");
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <FormStyles onSubmit={handleOnSubmit}>
      <label htmlFor="name">{props.translations.yourName}</label>
      <input
        required
        value={inputs.name}
        id="name"
        onChange={handleOnChange}
        type="text"
        name="name"
        placeholder="Your Name"
      />
      <label htmlFor="email">Email</label>
      <input
        required
        value={inputs.email}
        id="email"
        onChange={handleOnChange}
        type="email"
        name="_replyto"
        placeholder="name@example.com"
      />
      <label htmlFor="message">{props.translations.message}</label>
      <textarea
        required
        placeholder="What are you thinking about?"

        value={inputs.message}
        id="message"
        onChange={handleOnChange}
        name="message"
        cols="30"
        rows="10"
      ></textarea>
      <button type="submit" disabled={status.submitting}>
        {!status.submitting
          ? !status.submitted
            ? props.translations.sendButton
            : "Submitted"
          : "Submitting..."}
      </button>

      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </FormStyles>
  );
};

export default Form;
