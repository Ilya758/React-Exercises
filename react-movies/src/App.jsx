import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "./components/global/global.style.scss";

export default class App extends React.Component {
  state = {
    movies: [],
    query: "",
    category: "all",
  };

  handleChangeCategory = (e) => {
    this.setState({
      category: e.target.value,
    });
  };
  render() {
    return (
      <>
        <Header />
          category={category}
          cbCategory={this.handleChangeCategory}
        <Footer />
      </>
    );
  }
}
