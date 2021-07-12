import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <form>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </form>
    );
  }
}
export default Home;
