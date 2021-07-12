import React from 'react';

class Search extends React.Component {
  constructor() {
    super();
    this.eventHandler = this.eventHandler.bind(this);
    this.state = {
      searchText: '',
    };
  }

  eventHandler({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { searchText } = this.state;
    return (
      <label htmlFor="searchText">
        <input
          placeholder=""
          onChange={ this.eventHandler }
          name="searchText"
          value={ searchText }
        />
      </label>
    );
  }
}

export default Search;
