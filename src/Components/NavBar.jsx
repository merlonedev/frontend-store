import React from 'react';
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
      <li data-testid="category" key={ r.id }>
        {r.name}
      </li>,
    ));
    return results;
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

export default NavBar;
