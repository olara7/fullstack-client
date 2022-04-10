import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { gql, useMutation } from "@apollo/client";
import { Link, Redirect } from 'react-router-dom';

import "./Signin.css"

const SIGNIN = gql`
mutation Signin($email: String!, $password: String!) {
  signin(credentials: {
    email: $email,
    password: $password
  }){
    userErrors {
      message
    }
    token

  }
}
`

export default function Signin() {

  const [signin, {data, loading}] = useMutation(SIGNIN);

  console.log(data)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    signin({
      variables: {
        email,
        password,
      },
    });
  };

  const [error, setError] = useState(null);

  useEffect(() => {
    if(data) {
      //if there is an error in sign in, set the error message
      if(data.signin.userErrors.length) {
        setError(data.signin.userErrors[0].message)
      }
      //if user sign in is correct, set token in local storage
      if(data.signin.token){
        localStorage.setItem("token", data.signin.token);
        window.location = "/posts"; //redirect user to posts after successfully signing in
      }
    }
  }, [data]);

  return (
    <div>
      <Form className="signin-form">
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {error && <p>{error}</p>}
        <Button onClick={handleClick}>Signin</Button>
      </Form>
    </div>
  );
}
