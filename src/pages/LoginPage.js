import Login from "../components/Login";
import Navbar from "../components/NavbarCom/Navbar";

function userLogin() {
  return (
    <>
      <Navbar />
      <main className="container">
        <div>
          <Login />
        </div>
      </main>
    </>
  );
}

export default userLogin;
