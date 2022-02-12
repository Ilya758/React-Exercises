import React from "react";
import Card from "./card/Card";
import "./Cards.style.scss";

export default class Cards extends React.Component {
  render() {
    const { movies } = this.props;
    const arrOfMovies = Array.from(movies);

    return (
      <>
        <ul className="cards-list">
          {arrOfMovies.length ? (
            arrOfMovies.map((movie) => {
              return <Card key={movie.imdbID} {...movie} />;
            })
          ) : (
            <h3>Nothing found!</h3>
          )}
        </ul>
      </>
    );
  }
}
