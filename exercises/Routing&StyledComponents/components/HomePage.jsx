import React, { useContext, useEffect } from "react";
import {
  useLocation,
  useParams,
  useSearchParams,
  useMatch,
} from "react-router-dom";
import { ThemeContext, useTheme } from "styled-components";

const HomePage = () => {
  console.log(useContext(ThemeContext));
  return <div>HomePage</div>;
};

export default HomePage;
