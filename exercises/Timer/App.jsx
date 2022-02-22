import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      timerIsStarted: false,
    };
  }

  handleClickTimerButton = () => {
    this.setState({
      timerIsStarted: !this.state.timerIsStarted,
    });

    if (!this.state.timerIsStarted) {
      this.timer = setInterval(() => {
        this.setState({
          counter: this.state.counter + 1,
        });
      }, 1000);
    } else {
      clearInterval(this.timer);
    }
  };

  commit() {
    localStorage.setItem("currentTime", `${this.state.counter}`);
  }

  componentDidMount() {
    console.log("didmount");

    const currentTime = +localStorage.getItem("currentTime");

    if (currentTime) {
      this.setState({
        counter: currentTime,
      });
    }
  }

  componentDidUpdate() {
    console.log("update");
    this.commit();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleResetCounter = () => {
    this.setState({
      counter: 0,
      timerIsStarted: false,
    });
    clearInterval(this.timer);
    localStorage.clear();
  };

  render() {
    console.log("render");
    const centerStyle = { textAlign: "center" };
    const timerIsStarted = !this.state.timerIsStarted ? "Start" : "Stop";
    return (
      <>
        <h1 style={{ textAlign: "center" }}>React Timer</h1>
        <h2 style={centerStyle}>{this.state.counter}</h2>
        <div style={centerStyle}>
          <button onClick={this.handleClickTimerButton}>
            {timerIsStarted}
          </button>
          <button onClick={this.handleResetCounter}>Reset</button>
        </div>
      </>
    );
  }
}
