import { useState } from "react";
import { useHistory } from "react-router-dom";

function AdminMain() {
  const history = useHistory();

  const handleChangePage = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name === "createExhibition") {
      history.push("/exhibitioncreate");
    } else if (e.target.name === "createContent") {
      history.push("/createcontent");
    }
  };

  return (
    <>
      <div>
        <button name="createExhibition" onClick={handleChangePage}>
          Create an exhibition.
        </button>
      </div>
      <div>
        <button name="createContent" onClick={handleChangePage}>
          Create content.
        </button>
      </div>
    </>
  );
}

export default AdminMain;
