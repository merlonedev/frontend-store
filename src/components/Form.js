import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="form-input-email">
          <input type="text" id="form-input-email" />
        </label>
        <label htmlFor="form-input-message">
          <textarea id="form-input-message" />
        </label>
      </form>
    );
  }
}

export default Form;
