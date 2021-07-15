import React, { Component } from 'react';

class AddToCard extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          id="add-to-cart"
          data-testid="product-detail-add-to-cart"
        >
          ADICIONAR AO CARRINHO
        </button>
      </div>
    );
  }
}

export default AddToCard;
