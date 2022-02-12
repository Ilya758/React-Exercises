import React from "react";
import Categories from "../categories/Categories";
import Search from "../search/Search";
import "./Main.style.scss";

export default class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          <Search />
          <Categories />
        </main>
      </>
    );
  }
}
