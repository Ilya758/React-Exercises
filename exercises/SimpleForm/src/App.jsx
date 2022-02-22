import React, { Component } from "react";
import Form from "./components/Form";

export default class App extends Component {
  render() {
    const style = { textAlign: "center" };

    return (
      <>
        <h1 style={style}>Subscription form</h1>
        <Form />
      </>
    );
  }
}
