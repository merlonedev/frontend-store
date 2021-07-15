import React from 'react';
import Proptypes from 'prop-types';

class Evaluation extends React.Component {
  render() {
    const { name, nota, comentario } = this.props;
    return (
      <section>
        <p>{`${name} ${nota} ${comentario} `}</p>
      </section>
    );
  }
}

Evaluation.propTypes = {
  name: Proptypes.string.isRequired,
  nota: Proptypes.number.isRequired,
  comentario: Proptypes.string.isRequired,
};

export default Evaluation;
