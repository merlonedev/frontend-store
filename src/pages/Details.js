import React, { Component } from 'react';

class Details extends Component {
  render() {
    return (
      <main>
        <p>{this.props.match.params.id}</p>
      </main>
    );
  }
}

export default Details;
