import React from "react";
import "./Footer.style.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="light-green">
          <h6>{new Date().getFullYear()} &copy; All rights reserved</h6>
        </footer>
      </>
    );
  }
}
