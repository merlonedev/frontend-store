import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(change) {
    this.setState({
      textInput: change.target.value,
    });
  }

  render() {
    const { textInput } = this.state;
    return (
      <div>
        <input
          type="text"
          id=""
          placeholder=""
          value={ textInput }
          onChange={ this.handleChange }
          data-testid="query-input"
        />
      </div>
    );
  }
}

export default List;
