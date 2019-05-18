import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";

export default class App extends Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID a8dcf6b18aeb5c39a893a344dd47143cffbe6808ac2a1ceb656cbfb3b5962b03"
      }
    });

    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
