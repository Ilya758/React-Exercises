import React from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  const goBack = () => navigate("/home", { replace: true });
  const [searchParams] = useSearchParams({
    name: "Ilya",
    age: 25,
    occupation: "Software Developer",
  });

  for (let key in Object.fromEntries(searchParams)) {
    console.log(key);
  }

  return (
    <>
      <ul>
        <li>
          <span>text1</span>
        </li>
        <li>
          <span>text2</span>
        </li>
        <li>
          <span>text3</span>
        </li>
      </ul>
      <h3>Here is your dynamic segment id={useParams().id}</h3>
      {/* <Link to={"/layout"}>Back to layout</Link> */}
      <button onClick={goBack}>Back to previous page</button>
    </>
  );
};

export default List;
