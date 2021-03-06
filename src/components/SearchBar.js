import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: ""
  };

  onSearchSubmit = e => {
    e.preventDefault();

    // onSubmit here is the props on App.js
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSearchSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
