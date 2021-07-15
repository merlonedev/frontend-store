import React from 'react';

export default class Rating extends React.Component {
  render() {
    return (
      <div>
        <input type="radio" name="nota" value="1" />
        <input type="radio" name="nota" value="2" />
        <input type="radio" name="nota" value="3" />
        <input type="radio" name="nota" value="4" />
        <input type="radio" name="nota" value="5" />
      </div>
    );
  }
}
