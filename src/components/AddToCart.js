import React from 'react';
import PropTypes from 'prop-types';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  checkAvailability(arr, val) {
    return arr.some((arrVal) => val === arrVal);
  }

  addItem() {
    const { productObj } = this.props;
    const newObj = { ...productObj, quantity: 1 };
    const storage = JSON.parse(localStorage.getItem('itens')) || [];
    const arrayIDs = storage.map((item) => item.id);
    if (this.checkAvailability(arrayIDs, productObj.id)) {
      const indexObj = arrayIDs.indexOf(productObj.id);
      storage[indexObj].quantity += 1;
      return localStorage.setItem('itens', JSON.stringify(storage));
    }
    const newStorage = [...storage, newObj];
    localStorage.setItem('itens', JSON.stringify(newStorage));
  }

  render() {
    const { qtdIncrement } = this.props;
    return (
      <button
        className="btn btn-outline-primary"
        type="button"
        data-testid="product-add-to-cart"
        onClick={ () => {
          this.addItem();
          qtdIncrement();
        } }
      >
        Adicione item ao carrinho
      </button>
    );
  }
}

AddToCart.propTypes = {
  productObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  qtdIncrement: PropTypes.func.isRequired,
};

export default AddToCart;
