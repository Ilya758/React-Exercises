import React, { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleArticleVisibility = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  componentWillUnmount() {
    console.log("post was removed");
  }

  render() {
    const buttonStyle = { marginLeft: "20px" };
    const liStyle = { marginBottom: "10px", userSelect: "none" };
    const articleBody = this.state.isOpen ? null : <h4>{this.props.body}</h4>;

    return (
      <>
        <li id={this.props.id} style={liStyle}>
          <span onClick={this.handleArticleVisibility}>{this.props.title}</span>
          {articleBody}
          <button onClick={this.props.cb} style={buttonStyle}>
            Delete
          </button>
        </li>
      </>
    );
  }
}
