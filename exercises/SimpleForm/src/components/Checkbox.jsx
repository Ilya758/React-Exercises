import React, { Component } from "react";

export default class Checkbox extends Component {
  render() {
    return (
      <>
        <label>
          <input type="checkbox" name="subscription" onChange={this.props.cb} />
          You need to agree with the terms
        </label>
      </>
    );
  }
}
