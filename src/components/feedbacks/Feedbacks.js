import React from 'react';
import PropTypes from 'prop-types';

class Feedbacks extends React.Component {
  render() {
    const { usersFeedbacks } = this.props;
    if (usersFeedbacks.length !== 0) {
      return (
        <section>
          <h1>Feedbacks propositivos hamburgueres</h1>
          <ul>
            {
              usersFeedbacks.map((e) => (
                <>
                  <li key={ e.userEmail }>
                    Usuario:
                    {' '}
                    { e.userEmail }
                  </li>
                  <li key={ e.userRating }>
                    nota:
                    {' '}
                    { e.userRating }
                  </li>
                  <li key={ e.userRating }>
                    comentario:
                    {' '}
                    { e.userComent }
                  </li>
                </>
              ))
            }
          </ul>
        </section>
      );
    }
    return (
      <h1>
        Produto sem feedback
      </h1>
    );
  }
}

Feedbacks.propTypes = {
  usersFeedbacks: PropTypes.arrayOf(Object),
};

Feedbacks.defaultProps = {
  usersFeedbacks: [],
};
export default Feedbacks;
