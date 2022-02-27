import React, { Component } from "react";
import Post from "./Post";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: {} };
  }

  handleClickDeleteButton = (e) => {
    const { parentElement } = e.target;
    const { id } = parentElement;
    this.setState({
      posts: Array.from(this.state.posts).filter((post) => +post.id !== +id),
    });
  };

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const posts = Array.from(data).filter((_, ndx) => ndx < 10);
        this.setState({
          posts: posts,
        });
      });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.posts.length ? (
            Array.from(this.state.posts).map((post) => (
              <Post
                cb={this.handleClickDeleteButton}
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            ))
          ) : (
            <h3>You've been deleted all the posts!</h3>
          )}
        </ul>
      </>
    );
  }
}
