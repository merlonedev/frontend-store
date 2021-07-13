import React from 'react';
import List from '../Components/List';
import SearchResult from '../Components/SearchResult';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
      textToSearch: '',
    };

    this.getSearch = this.getSearch.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  getSearch(change) {
    this.setState({
      input: change,
    });
  }

  doSearch() {
    const { input } = this.state;
    this.setState({
      textToSearch: input,
    });
  }

  render() {
    const { textToSearch } = this.state;
    return (
      <div>
        <List textChange={ this.getSearch } />
        <button
          type="button"
          onClick={ this.doSearch }
          data-testid="query-button"
        >
          Pesquisar
        </button>
        {/* {clickSearch && <SearchResult textToSearch={ search } />} */}
        <SearchResult textToSearch={ textToSearch } />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
