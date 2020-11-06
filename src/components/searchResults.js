import React, { Component } from "react";
import SearchForm from "./searchForm";
import employee from "./employee.json";

class SearchResults extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the employee.js 
  componentDidMount() {
    this.searchEmployee("employee");
  }

  searchEmployee = json => {
    employee.search(json)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResults;
