import React from "react";
import "./Card.style.scss";

export default class Card extends React.Component {
  render() {
    const { Poster: poster, Title: title, Type: type, Year: year } = this.props;

    return (
      <>
        <li className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="card-img activator" src={poster} alt={title} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {title}
            </span>
            <div className="text">
              <h6>{year}</h6>
              <span>{type}</span>
            </div>
          </div>
        </li>
      </>
    );
  }
}
