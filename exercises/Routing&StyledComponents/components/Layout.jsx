import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>This is a header-like comp</div>
      <Outlet />
      <div>This is a footer-like comp</div>
    </>
  );
};

export default Layout;
