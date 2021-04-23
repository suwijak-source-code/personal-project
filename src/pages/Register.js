import Register from "../components/Register";
import Navbar from "../components/NavbarCom/Navbar";

const registerPage = () => {
  return (
    <>
      <Navbar />
      <div className="registerForm">
        <Register />
      </div>
    </>
  );
};

export default registerPage;
