import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "../config/axios";
import localStorageService from "../service/localStorage";
import "./cargoCard.css";

function CargoCard(props) {
  const [image, setImage] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const img = await axios.get("/content/");
        setImage(img.data.allContent);
      } catch (err) {}
    }
    fetchData();
  }, []);

  console.log(image);

  const history = useHistory();

  const handleJumpToExhibitions = (event) => {
    history.push("/exhibitions");
  };

  return (
    <div className="cardboxs">
      <div className="cargo-card-container">
        {image.map((item) => (
          <div>
            <div className="card">
              <img
                src={item.picture}
                alt=""
                onClick={handleJumpToExhibitions}
              ></img>
              <div className="cargo-card-name">
                <a onClick={handleJumpToExhibitions}>{item.text}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CargoCard;
