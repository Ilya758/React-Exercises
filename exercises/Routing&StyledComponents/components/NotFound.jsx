import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const NotFound = () => {
  let location = useLocation();
  let urlParams = useParams();
  let [urlSearchParams] = useSearchParams();

  console.log(location);
  console.log(urlParams);
  console.log(urlSearchParams);

  return <div>NotFound</div>;
};

export default NotFound;
