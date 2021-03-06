import React from "react";
import "./Categories.style.scss";
import Checkbox from "./checkbox/Checkbox";

export default class Categories extends React.Component {
  render() {
    const categories = ["all", "movie", "series"];

    return (
      <>
        <ul className="categories">
          {categories.map((category) => (
            <Checkbox
              key={category}
              id={category}
              category={this.props.category}
              cbCategory={this.props.cbCategory}
            />
          ))}
        </ul>
      </>
    );
  }
}
