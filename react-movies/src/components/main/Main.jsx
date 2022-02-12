import React from "react";
import Categories from "../categories/Categories";
import Search from "../search/Search";
import "./Main.style.scss";

export default class Main extends React.Component {
  render() {
    const { category, cbCategory } = this.props;

    return (
      <>
        <main>
          <Categories category={category} cbCategory={cbCategory} />
        </main>
      </>
    );
  }
}
