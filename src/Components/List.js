import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(change) {
    const { textChange } = this.props;
    textChange(change.target.value);
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

List.propTypes = {
  textChange: PropTypes.func.isRequired,
};

export default List;
