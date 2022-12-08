import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  setQuery = evt => {
    const value = evt.target.value.toLowerCase().trim();
    console.log('Searchbar  query', value);
    this.setState({ query: value });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    console.dir(evt);
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onFormSubmit}>
          <button
            type="submit"
            className="button"
            disabled={this.state.query === ''}
          >
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.setQuery}
          />
        </form>
      </header>
    );
  }
}
