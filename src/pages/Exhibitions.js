import Navbar from "../components/NavbarCom/Navbar";
import PictureCard from "../components/Card";
import Advertisements from "../components/Advertisement";
import CargoCard from "../components/CardsContainer";

function Exhibitions() {
  return (
    <>
      <Navbar />
      <main>
        <div>
          <Advertisements />
          <CargoCard />
        </div>
      </main>
    </>
  );
}

export default Exhibitions;
