import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Settings from "./components/Settings";
import AboutPage from "./components/AboutPage";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import List from "./components/List";
import AppStyle, { GlobalStyle } from "./components/App.style";
import "./components/style.scss";
import { ThemeContext, ThemeProvider, useTheme } from "styled-components";

const back = {
  color: "grey",
};
const theme = {
  color: "grey",
};

const App = () => {
  console.log(useContext(ThemeContext));

  return (
    <>
      <ThemeProvider theme={back}>
        <GlobalStyle />
        <AppStyle typ>
          <header>
            <div>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                to={"/home"}
              >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                to={"/settings"}
              >
                settings
              </NavLink>
            </div>
            <div>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                to={"/about"}
              >
                about
              </NavLink>
            </div>
            <div>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                to={"/layout"}
              >
                layout
              </NavLink>
            </div>
            <div>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                to={`/layout/list/${15}`}
              >
                List
              </NavLink>
            </div>
          </header>
          <main>
            <Routes>
              <Route
                path={"/home"}
                element={<HomePage theme={theme} />}
              ></Route>
              <Route path={"/settings"} element={<Settings />}></Route>
              <Route path={"/about"} element={<AboutPage />}></Route>
              <Route
                path={"/about-us"}
                element={<Navigate to={"/about"} replace />}
              ></Route>
              <Route path={"/layout"} element={<Layout />}>
                <Route path={"list/:id"} element={<List />}></Route>
              </Route>
              <Route path={"/*"} element={<NotFound />}></Route>
            </Routes>
          </main>
        </AppStyle>
      </ThemeProvider>
    </>
  );
};

export default App;
