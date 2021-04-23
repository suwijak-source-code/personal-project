import Navbar from "../components/NavbarCom/Navbar";
import AdminCom from "../components/CreateContent";

function Admin() {
  return (
    <>
      <Navbar />
      <main>
        <div>
          <AdminCom />
        </div>
      </main>
    </>
  );
}

export default Admin;
