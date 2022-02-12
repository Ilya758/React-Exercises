import React from "react";
import Card from "./card/Card";
import "./Cards.style.scss";

export default class Cards extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <>
        <ul className="cards-list">
          {Array.from(movies).map((movie) => {
            return <Card key={movie.imdbID} {...movie} />;
          })}
        </ul>
      </>
    );
  }
}
