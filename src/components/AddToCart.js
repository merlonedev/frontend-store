import React from 'react';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    const { itemId } = this.props;
    const storage = JSON.parse(localStorage.getItem('itens')) || [];
    const newStorage = [...storage, itemId];
    console.log(itemId);
    localStorage.setItem('itens', JSON.stringify(newStorage));
  }

  render() {
    return(
      <button
       data-testid="product-add-to-cart" onClick={ this.addItem }
      >
        Adicione item ao carrinho
      </button>
    )
  }

}

export default AddToCart;
