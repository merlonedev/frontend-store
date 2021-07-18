import React, { Component } from 'react';
import * as API from '../services/api';

import SearchBar from './SearchBar';
import Categories from './Categories';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';
import ProductList from './ProductList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      shoppingCartProductList: [],
      query: '',
      renderDetailsFor: {},
      renderDetails: false,
      renderShoppingCart: false,
    };
    this.getProductList = this.getProductList.bind(this);
    this.getProductListByCategory = this.getProductListByCategory.bind(this);
    this.getProductListByQuery = this.getProductListByQuery.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.updateCartProduct = this.updateCartProduct.bind(this);
    this.addNewProductToCart = this.addNewProductToCart.bind(this);
  }

  // componentDidMount() {
  //   this.getProductList(undefined, 'motos');
  // }

  async getProductList(categoryid, query) {
    const productList = await API.getProductsFromCategoryAndQuery(categoryid, query);
    this.setState({
      productList: productList.results,
    });
  }

  getProductListByCategory(categoryid) {
    const { query } = this.state;
    this.getProductList(categoryid, query);
  }

  getProductListByQuery(query) {
    this.setState({
      query,
    });
    this.getProductList(undefined, query);
  }

  getIndexById(id, array) { return array.map((elem) => elem.id).indexOf(id); } // Uma função que pode ir para um arquivo externo. Retorna o índice do objeto com determinada chave id.

  addNewProductToCart(newCartProduct) { // Função deve ser chamada toda vez que um novo produto é adicionado ao carrinho de compras.
    return ({ // retorna um objeto iniciador que nos permite ter acesso a informações úteis do produto, bem como ao objeto do produto do qual foi originado.
      id: newCartProduct.id, // informações úteis do produto
      quantity: 1, // informações úteis do produto
      price: newCartProduct.price, // informações úteis do produto
      product: newCartProduct, // objeto do produto do qual foi originado
    });
  }

  updateCartProduct(productToBeUpdated, operation) { // Função deve ser chamada sempre que se precise adicionar um produto repetido no carrinho, ou de alguma forma alterar o objeto iniciado por addNewProductToCart(). Um exemplo é para aumentar, diminuir e limitar os valores de uma chave do referido objeto. Leva como parâmetros um objeto (daqueles que vêm da chamada da API) e uma string ("+" ou "-").
    const { shoppingCartProductList } = this.state; // Pegamos a lista de produtos no carrinho do estado.
    const tempState = [...shoppingCartProductList]; // Reparem que criamos um estado temporário espalhando o conteúdo da lista de produtos no carrinho.
    const index = this.getIndexById(productToBeUpdated.id, tempState); // Comentário na definição =)
    const tempElement = { ...tempState[index] }; // Estamos fazendo uma cópia rasa ("shalow copy") do objeto que contem o estado aninhado quantity.
    if (operation === '+') tempElement.quantity += 1; // Modificando o valor da chave quantity (poderia ser outra...)
    if (operation === '-') tempElement.quantity -= 1;// Modificando o valor da chave quantity (poderia ser outra...)
    if (tempElement.quantity < 0) tempElement.quantity = 0; // Limitando o valor da chave quantity...
    tempState[index] = tempElement; // Aqui estamos gravando o objeto que modificamos,
    this.setState({ // Pra setar o estado com a nossa cópia.
      shoppingCartProductList: tempState,
    });
  }

  addToCart(product) { // Função que deve ser chamada para adicionar um determinado produto ao carrinho de compras. O produto que ela leva como parâmetro é um objeto (daqueles que vieram da chamada da API e representam os produtos).
    const { shoppingCartProductList } = this.state;
    if (shoppingCartProductList.some((prod) => prod.id === product.id)) { // Esta condição retornará true se o produto fornecido como parâmetro tiver o mesmo id de algum, ou 'some', dos produtos no carrinho de compras.
      this.updateCartProduct(product, '+'); // Se o produto já constar no carrinho de compras, atualize sua quantidade, no caso, incrementando.
    } else {
      this.setState((prev) => ({ // Senão, espalhe os produtos presentes no estado anterior no carrinho de compras e insira um novo objeto de carrinho de compras --> this.addNewProductToCart().
        shoppingCartProductList: [
          ...prev.shoppingCartProductList, this.addNewProductToCart(product)],
      }));
    }
  }

  findProduct(productList, renderDetailsProductId) {
    return productList.find((product) => product.id === renderDetailsProductId);
  }

  renderDetails(renderDetailsProductId) {
    const { productList } = this.state;
    const detailedProduct = this.findProduct(productList, renderDetailsProductId);
    this.setState({
      renderDetailsFor: detailedProduct,
      renderDetails: true,
    });
  }

  render() {
    const {
      productList,
      renderDetails,
      renderDetailsFor,
      shoppingCartProductList,
      renderShoppingCart,
    } = this.state;

    if (renderShoppingCart) {
      return (
        <ShoppingCart
          shoppingCartProductList={ shoppingCartProductList }
          shoppingCartUpdaterCallback={ (updatedShoppingCart) => this.setState({
            shoppingCartProductList: updatedShoppingCart,
          }) }
          goBackCallBack={ () => this.setState({
            renderShoppingCart: false,
            renderDetails: false,
          }) }
        />
      );
    }
    if (renderDetails) {
      return (<ProductDetails
        product={ renderDetailsFor }
        renderShoppingCartCallBack={ () => this.setState({
          renderShoppingCart: true,
          renderDetails: false,
        }) }
        goBackCallBack={ () => this.setState({
          renderDetails: false,
          renderShoppingCart: false,
        }) }
      />);
    }
    return (
      <>
        <SearchBar
          getProductListByQueryCallBack={ this.getProductListByQuery }
        />
        <button
          type="button"
          onClick={ () => {
            this.setState({
              renderShoppingCart: true,
            });
          } }
          data-testid="shopping-cart-button"
        >
          carrinho
        </button>
        <Categories
          getProductListByCategoryCallBack={ this.getProductListByCategory }
        />
        <ProductList
          productList={ productList }
          renderDetailsCallBack={ this.renderDetails }
          addToCartCallback={ this.addToCart }
        />
      </>
    );
  }
}

export default Home;
