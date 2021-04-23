import { useState } from "react";
import axios from "../config/axios";
import { useHistory } from "react-router-dom";
import { Button, Form, Col } from "react-bootstrap";
import "./register.css";

function Register() {
  const [input, setInput] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    address: "",
  });

  //   const [error, setError] = userState({});
  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    try {
      const {
        email,
        username,
        password,
        confirmPassword,
        displayName,
        firstName,
        lastName,
        address,
      } = input;
      event.preventDefault();
      const res = await axios.post("/user/register", {
        email,
        username,
        password,
        confirmPassword,
        displayName,
        firstName,
        lastName,
        address,
      });
      console.log(res);
      history.push("/");
    } catch (err) {
      console.dir(err);
    }
  };
  return (
    <>
      <div className="registerForm">
        <div onSubmit={handleSubmit}>
          <h2>Become a supporter.</h2>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridUsername">
                <Form.Label></Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Username"
                  name="username"
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label></Form.Label>
                <Form.Control
                  type="Password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label></Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstname">
                <Form.Label></Form.Label>
                <Form.Control
                  type="firstName"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastname">
                <Form.Label></Form.Label>
                <Form.Control
                  type="lastName"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress">
              <Form.Label></Form.Label>
              <Form.Control
                placeholder="Please enter your display name"
                name="displayName"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label></Form.Label>
                <Form.Control
                  placeholder="Please enter your address."
                  name="address"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="I understand terms and conditions."
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Register;
