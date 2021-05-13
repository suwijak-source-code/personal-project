import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../config/axios";

import "./createContent.css";

const Admin = () => {
  const [input, setInput] = useState({
    text: "",
    exhibitionId: "",
  });
  const [files, setFiles] = useState(null);

  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeFile = (e) => {
    console.log(e);
    setFiles(e.target.files[0]);
  };
  // console.log(input.exhibitionId + "TEST");
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      console.log(formData + "test");

      formData.append("picture", files);
      formData.append("text", input.text);
      formData.append("exhibitionId", input.exhibitionId);

      const res = await axios.post("/content/", formData);
      // pure JAVASCRIPT - DOM
      document.getElementById("pictureForm").value = "";
      setInput({
        text: "",
        exhibitionId: "",
      });
      history.push("/admin");
      // alert("Content has created.");
      // history.push("/admin");
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <>
      <div className="content_form">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="welcometext">Let's create an exhibition.</h2>
          <br />
          <p>Please select file to create content.</p>

          <input
            type="file"
            id="pictureForm"
            onChange={handleChangeFile}
            className="picture_form"
          />

          <input
            className="text_form"
            type="text"
            placeholder="Enter description here."
            onChange={handleInputChange}
            name="text"
            value={input.text}
          ></input>

          <input
            className="exhibition_form"
            type="text"
            placeholder="direct to what exhibition ID."
            onChange={handleInputChange}
            name="exhibitionId"
            value={input.exhibitionId}
          ></input>

          <button type="submit" className="button">
            Add to an Exhibition
          </button>
        </form>
      </div>
    </>
  );
};

export default Admin;
