import React from "react";

export default class Checkbox extends React.Component {
  render() {
    const { id } = this.props;

    return (
      <>
        <li key={id}>
          <label>
            <input
              onChange={this.props.cbCategory}
              name="category"
              type="radio"
              value={id}
              checked={this.props.category === id}
            />
            <span>{`${id[0].toUpperCase()}${id.slice(1)}`}</span>
          </label>
        </li>
      </>
    );
  }
}
