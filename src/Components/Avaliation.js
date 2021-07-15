import React from 'react';
import ReactStars from 'react-rating-stars-component';

class Avaliation extends React.Component {
  render() {
    return (
      <form className="avaliate">
        <div className="avaliate-div">
          <input id="email-input" type="email" placeholder="E-mail" />
          <ReactStars
            count={ 5 }
            size={ 24 }
            activeColor="#ffd700"
          />
        </div>
        <br />
        <textarea
          data-testid="product-detail-evaluation"
          cols="30"
          rows="10"
          type="text"
          placeholder="Mensagem (Opcional)"
          maxLength="500"
        />
        <br />
        <button type="button" required>Avaliar</button>
      </form>
    );
  }
}

export default Avaliation;
