import React from 'react';
import PropTypes from 'prop-types';

class GenComment extends React.Component {
  render() {
    const { avaliations, productId = '' } = this.props;
    const productComments = avaliations.filter(({ id }) => id === productId);
    if (productComments.length === 0) {
      return (<p>Não existem comentários para este produto.</p>);
    }
    return (
      <section>
        {productComments.map(({ aval }) => (
          <div key={ aval.email }>
            <p>
              {aval.email}
              {' rate: '}
              {aval.rate}
            </p>
            <p>{aval.comment}</p>
          </div>))}
      </section>
    );
  }
}

GenComment.propTypes = {
  avaliations: PropTypes.arrayOf(PropTypes.object).isRequired,
  productId: PropTypes.string.isRequired,
};

export default GenComment;
