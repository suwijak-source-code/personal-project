import { Route, Switch, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContextProvider";
import Home from "./pages/Home";
import userLogin from "./pages/LoginPage";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Exhibitions from "./pages/Exhibitions";
import CreateContent from "./pages/CreateContent";
import CreateExhibition from "./pages/CreateExhibition";

const privateRoute = [
  {
    path: "/exhibitions",
    component: Exhibitions,
  },
];

const publicRoute = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: userLogin,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/exhibitions",
    component: Exhibitions,
  },
];

const adminRoute = [
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/createcontent",
    component: CreateContent,
  },
  {
    path: "/exhibitioncreate",
    component: CreateExhibition,
  },
];

function App() {
  const { isAuthenticated, roles } = useContext(AuthContext);
  console.log(isAuthenticated);
  console.log(roles);
  return (
    <Switch>
      {isAuthenticated &&
        roles === "ADMIN" &&
        adminRoute.map((el, index) => (
          <Route key={index} exact path={el.path} component={el.component} />
        ))}

      {isAuthenticated &&
        privateRoute.map((el, index) => (
          <Route key={index} exact path={el.path} component={el.component} />
        ))}

      {isAuthenticated &&
        roles === "GUEST" &&
        publicRoute.map((el, index) => (
          <Route key={index} exact path={el.path} component={el.component} />
        ))}

      {!isAuthenticated &&
        publicRoute.map((el, index) => (
          <Route key={index} exact path={el.path} component={el.component} />
        ))}
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
