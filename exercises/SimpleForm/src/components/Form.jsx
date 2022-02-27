import React, { Component } from "react";
import Checkbox from "./Checkbox";

export default class Form extends Component {
  state = {
    email: "",
    subscription: false,
  };

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleChange = (e) => {
    const { name, value, checked } = e.target;
    this.setState({
      [name]: name === "email" ? value : checked,
    });
  };

  validateForm = (e) => {
    e.preventDefault();
    const { email, subscription } = this.state;
    const emailRegex = /^[\w\d][\w\W\s]*@[\w]{3,}.[\w\d]{3,}$/gi;

    if (!emailRegex.test(email)) {
      alert("Your email must be valid");
    } else if (!subscription) {
      alert("You haven't agreed with the terms");
    } else {
      e.target.parentElement.submit();
    }
  };

  render() {
    return (
      <>
        <form action="#">
          <input
            ref={this.inputRef}
            type="email"
            name="email"
            onChange={this.handleChange}
          />
          <br />
          <Checkbox cb={this.handleChange} />
          <br />
          <button type="submit" onClick={this.validateForm}>
            Submit
          </button>
        </form>
      </>
    );
  }
}
