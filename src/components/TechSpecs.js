import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TechSpecs extends Component {
  constructor() {
    super();

    this.renderTechSpecs = this.renderTechSpecs.bind(this);
  }

  renderTechSpecs() {
    const { attributes } = this.props;
    return (
      <div className="specs-container">
        <h2 className="specs-title">Especificações Técnicas</h2>
        <ul>
          { attributes.map((attribute, index) => (
            <li key={ index } className="specs">
              { `${attribute.name}: ${attribute.value_name === null ? (
                ''
              ) : `${attribute.value_name}`}` }
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return this.renderTechSpecs();
  }
}

TechSpecs.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.shape({
    map: PropTypes.func,
    value_id: PropTypes.string,
    name: PropTypes.string,
    value_name: PropTypes.string,
  })),
};

TechSpecs.defaultProps = {
  attributes: undefined,
};

export default TechSpecs;
