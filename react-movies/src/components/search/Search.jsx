import React from "react";
import "./Search.style.scss";

export default class Search extends React.Component {
  render() {
    const { cbInput, cbSubmit } = this.props;

    return (
      <>
        <form>
          <div className="input-field">
            <input name="query" id="search" type="search" onChange={cbInput} />
            <button
              onClick={cbSubmit}
              type="submit"
              className="waves-effect waves-light btn"
            >
              Search
            </button>
          </div>
        </form>
      </>
    );
  }
}
