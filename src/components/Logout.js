import { useContext, useState } from "react";
import localStorageService from "../service/localStorage";
import { AuthContext } from "../context/AuthContextProvider";
import { useHistory } from "react-router-dom";

const Logout = () => {
  //   const [logout, setLogout] = useState();

  const { setIsAuthenticated, setLoginSuccess } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = (event) => {
    event.preventDefault();
    localStorageService.clearToken();
    setLoginSuccess(false);
    setIsAuthenticated(false);
    history.push("/");
  };

  return (
    <>
      <div>
        <a className="logoutTag" onClick={handleLogout}>
          Log out
        </a>
      </div>
    </>
  );
};

export default Logout;
