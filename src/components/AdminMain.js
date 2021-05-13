import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./adminMain.css";

function AdminMain() {
  const history = useHistory();

  const handleChangePage = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name === "createExhibition") {
      history.push("/exhibitioncreate");
    } else if (e.target.name === "createContent") {
      history.push("/createcontent");
    } else if (e.target.name === "deleteContent") {
      history.push("/deletecontent");
    }
  };

  return (
    <>
      <div className="form">
        <div className="main">
          <div className="welcome">
            <h2>Welcome Admin.</h2>
          </div>
          <div className="admin">
            <div>
              <button
                name="createExhibition"
                onClick={handleChangePage}
                className="createAnExhibition"
              >
                Create an exhibition
              </button>
            </div>
            <div>
              <button
                name="createContent"
                onClick={handleChangePage}
                className="createContent"
              >
                Create content
              </button>
            </div>
            <div>
              <button
                name="deleteContent"
                onClick={handleChangePage}
                className="deleteContent"
              >
                Delete Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminMain;
