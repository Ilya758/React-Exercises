import React from "react";

export default class Checkbox extends React.Component {
  render() {
    const { id } = this.props;

    return (
      <>
        <li key={id}>
          <label>
            <input name="categories" type="radio" value={id} checked />
            <span>{`${id[0].toUpperCase()}${id.slice(1)}`}</span>
          </label>
        </li>
      </>
    );
  }
}
