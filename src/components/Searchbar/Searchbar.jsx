import React, { Component } from 'react';
import {
  SearchButton,
  SearchForm,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.styled';

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
      <header>
        <SearchForm onSubmit={this.onFormSubmit}>
          <SearchButton type="submit" disabled={this.state.query === ''}>
            <SearchFormLabel className="button-label">Search</SearchFormLabel>
          </SearchButton>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.setQuery}
          />
        </SearchForm>
      </header>
    );
  }
}
