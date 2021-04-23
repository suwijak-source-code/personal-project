import Navbar from "../components/NavbarCom/Navbar";
import Admin from "../components/AdminMain";

function AdminMain() {
  return (
    <>
      <Navbar />
      <main>
        <div>
          <div>
            <h2>Welcome Admin.</h2>
          </div>
          <div>
            <Admin />
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminMain;
