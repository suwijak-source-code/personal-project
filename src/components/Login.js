import { useState } from "react";
import axios from "../config/axios";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

import localStorageService from "../service/localStorage";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const history = useHistory();
  const { setRoles, setIsAuthenticated, setLoginSuccess } = useContext(
    AuthContext
  );

  const validateInput = () => {
    const newError = {};
    if (!username) newError.username = "username is require.";
    if (!password) newError.password = "password is require.";
    setError(newError);
  };

  const handelerSubmit = async (event) => {
    try {
      event.preventDefault();
      validateInput();
      // console.log("beer");
      const res = await axios.post("/user/", { username, password });
      console.log(res.data.token);
      localStorageService.setToken(res.data.token);
      setIsAuthenticated(true);
      if (res.data.roles === "ADMIN") {
        setRoles("ADMIN");
        setLoginSuccess(true);
        history.push("/admin");
      } else if (res.data.roles === "GUEST") {
        setRoles("GUEST");
        setLoginSuccess(true);
        history.push("/");
      }
    } catch (err) {
      console.dir(err);
    }
  };
  // console.log(loginSuccess);
  return (
    <>
      <div className="loginForm">
        <h1 className="text-centre">Welcome to photo gallery</h1>

        <div className="login_zone">
          <form onSubmit={handelerSubmit}>
            <div className="username_form">
              <input
                className="form_control"
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              {error.username && (
                <span className="help_block" style={{ color: "red" }}>
                  {error.username}
                </span>
              )}
            </div>
            <div className="password_form">
              <input
                className="form_control"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {error.password && (
                <span className="help_block" style={{ color: "red" }}>
                  {error.password}
                </span>
              )}
            </div>
            <button className="button">login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
