import { useState } from "react";
import { useHistory } from "react-router-dom";

const DeleteContent = () => {
  const [input, setInput] = useState();

  const history = useHistory();

  // const handleInputChange = (event) => {
  //   const { id } = event.target;
  //   setInput((prev) => ({ ...prev, [id]: value }));
  // };

  // const handleDeleteContent = (id) => {
  //   try {
  //     const { id } = input;
  //     const res = await axios.delete("/content/");
  //     history.push("/admin");
  //   } catch (err) {
  //     console.dir(err);
  //   }
  // };

  return (
    <>
      <div></div>
    </>
  );
};

export default DeleteContent;
