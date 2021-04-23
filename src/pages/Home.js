import Navbar from "../components/NavbarCom/Navbar";
import PictureCard from "../components/Card";
import Advertisement from "../components/Advertisement";
import CargoCard from "../components/CardsContainer";
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div>
          <Advertisement />
          <CargoCard />
        </div>
      </main>
    </>
  );
}

export default Home;
