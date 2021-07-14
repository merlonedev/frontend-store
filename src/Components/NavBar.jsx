import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class NavBar extends React.Component {
  constructor() {
    super();

    this.state = { categories: [] };
  }

  async componentDidMount() {
    await getCategories().then((r) => this.setState({ categories: r }));
  }

  componentDidUpdate() {
    const { categories } = this.state;
    const results = [];
    categories.forEach((r) => results.push(
      <button
        data-testid="category"
        type="button"
        key={ r.id }
        onClick={ this.handleclick }
        name={ r.name }
        className="navBtn"
      >
        {r.name}
      </button>,
    ));
    return results;
  }

  handleclick = (e) => {
    const { click } = this.props;
    const { name } = e.target;
    click(name, name);
  }

  render() {
    return (
      <nav>
        <ul className="categoryList">
          {this.componentDidUpdate()}
        </ul>
      </nav>
    );
  }
}

NavBar.propTypes = {
  click: PropTypes.func.isRequired,
};

export default NavBar;
