import React from "react";
import Categories from "../categories/Categories";
import Search from "../search/Search";
import "./Main.style.scss";
import Cards from "../cards/Cards";
import { API_KEY } from "../../constants/apiKey";

export default class Main extends React.Component {
  state = {
    movies: [],
    query: "",
    category: "all",
  };

  handleUserAction = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    const query = `http://www.omdbapi.com/?apikey=${API_KEY}&s=avengers
    `;

    fetch(query)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: data });
      });
  }

  render() {
    const { category, movies } = this.state;

    return (
      <>
        <main>
          <Search cbInput={this.handleUserAction} />
          <Categories category={category} cbCategory={this.handleUserAction} />
          <Cards movies={movies} />
        </main>
      </>
    );
  }
}
