import { Input } from "antd";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../config/axios";

const CreateExhibition = () => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    status: "",
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    try {
      const { name, description, status } = input;
      const res = await axios.post("/exhibitions/", {
        name,
        description,
        status,
      });
      alert("An exhibition has create.");
      history.push("/admin");
      console.log(res);
    } catch (err) {
      console.dir(err);
    }

    return (
      <>
        <div>
          <h2>Create a best journey to our clients.</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInputChange} name="name">
              Enter an exhibition name.
            </input>

            <input type="text" onChange={handleInputChange} name="description">
              Enter a description.
            </input>

            <input type="text" onChange={handleInputChange} name="status">
              Enter status || UPCOMING : SHOWING : EXPIRED
            </input>
          </form>
        </div>
      </>
    );
  };
};

export default CreateExhibition;
