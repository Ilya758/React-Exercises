import React from "react";
import Categories from "../categories/Categories";
import Search from "../search/Search";
import "./Main.style.scss";
import Cards from "../cards/Cards";
import { PRE_URL } from "../../constants/preUrl";
import Preloader from "../preloader/Preloader";

export default class Main extends React.Component {
  state = {
    movies: [],
    query: "",
    category: "all",
    loading: false,
  };

  handleUserAction = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    const query = `${PRE_URL}&s=avengers`;

    this.createRequest(query);
  }

  handleRequest = (e) => {
    e.preventDefault();
    const { category, query } = this.state;
    const type = category === "all" ? "" : `&type=${category}`;
    const request = `${PRE_URL}&s=${query}${type}`;

    this.createRequest(request);
  };

  createRequest(query) {
    this.setState({
      loading: true,
    });

    fetch(query)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data.Search || [], loading: false });
      });
  }

  render() {
    const { category, movies } = this.state;

    return (
      <>
        <main>
          <Search
            cbInput={this.handleUserAction}
            cbSubmit={this.handleRequest}
          />
          <Categories category={category} cbCategory={this.handleUserAction} />
          {this.state.loading ? <Preloader /> : <Cards movies={movies} />}
        </main>
      </>
    );
  }
}
