import React, { Component } from "react";
import Posts from "./components/Posts";

export default class App extends Component {
  render() {
    const style = { textAlign: "center" };

    return (
      <>
        <h1 style={style}>JSON Posts</h1>
        <h2 style={style}>Click to the post-title to toggle content</h2>
        <Posts></Posts>
      </>
    );
  }
}
