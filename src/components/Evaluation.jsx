import React, { Component } from 'react';

class Evaluation extends Component {
  constructor() {
    super();

    this.state = {
      
    };

  }

  render() {
    const { email, ratting, message } = this.props;

    return (
      <form method="get">
        Avaliações
        <div>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="1start">
            1
            <input type="radio" name="1stat" id="star" value="1" />
          </label>
          <label htmlFor="2start">
            2
            <input type="radio" name="2stat" id="star" value="2" />
          </label>
          <label htmlFor="3start">
            3
            <input type="radio" name="3stat" id="star" value="3" />
          </label>
          <label htmlFor="4start">
            4
            <input type="radio" name="4stat" id="star" value="4" />
          </label>
          <label htmlFor="5start">
            5
            <input type="radio" name="5stat" id="star" value="5" />
          </label>
        </div>
        <div>
          <label htmlFor="coment">
            <input
              data-testid="product-detail-evaluation"
              type="text"
              name="coment"
              placeholder="Mensagem (Opcional)"
            />
          </label>
        </div>
        <button type="submit">Avaliar</button>
      </form>
    );
  }
}

export default Evaluation;
