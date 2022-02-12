import React from "react";
import "./Header.style.scss";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav className="light-green">
            <div className="nav-wrapper">
              <span className="brand-logo">React-Movies</span>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a
                    href="https://github.com/Ilya758"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
