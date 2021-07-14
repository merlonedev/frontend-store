import React from 'react';
import CartProductItem from '../components/CartProductItem';
import cartIcon from '../icon/cart3.svg'

const product = {
  accepts_mercadopago:true,
  address:{city_id: "BR-SP-44", city_name: "São Paulo" },
  available_quantity: 13,
  buying_mode: "buy_it_now",
  catalog_listing: true,
  catalog_product_id: "MLB10813731",
  category_id: "MLB11172",
  condition: "new",
  currency_id: "BRL",
  differential_pricing:{id: 33580182},
  domain_id: "MLB-GAME_CONSOLES",
  installments:{amount: 207.58, currency_id: "BRL", quantity: 12, },
  listing_type_id: "gold_pro",
  official_store_id: null,
  permalink: "https://www.mercadolivre.com.br/sony-playstation-4-slim-500gb-standard-cor-jet-black/p/MLB10813731",
  price: 2491,
  prices:{id: "MLB1374017201" },
  sale_price:null,
  sold_quantity: 48,
  stop_time: "2040-09-17T17:30:32.000Z",
  thumbnail:"http://http2.mlstatic.com/D_779860-MLA45308148735_032021-I.jpg",
  title: "Sony Playstation 4 Slim 500gb Standard Cor  Jet Black",
  use_thumbnail_id: true,
}
const product2 = {
  accepts_mercadopago: true,
  address: {city_id: "BR-SP-44", city_name: "São Paulo", },
  available_quantity: 3,
  buying_mode: "buy_it_now",
  catalog_listing: true,
  catalog_product_id: "MLB15149562",
  category_id: "MLB1055",
  condition: "new",
  currency_id: "BRL",
  differential_pricing: {id: 33580182},
  domain_id: "MLB-CELLPHONES",
  id: "MLB1926814680",
  installments: {amount: 373.75, currency_id: "BRL", quantity: 12, },
  listing_type_id: "gold_pro",
  official_store_id: null,
  order_backend: 1,
  original_price: null,
  permalink: "https://www.mercadolivre.com.br/apple-iphone-11-64-gb-branco/p/MLB15149562",
  price: 4485,
  sold_quantity: 7,
  stop_time: "2041-06-18T04:00:00.000Z",
  thumbnail: "http://http2.mlstatic.com/D_730284-MLA46114648018_052021-I.jpg",
  thumbnail_id: "730284-MLA46114648018_052021",
  title: "Apple iPhone 11 (64 Gb) - Branco",
  use_thumbnail_id: true,
}

class CartPage extends React.Component {
  constructor() {
    super();

    this.state = {
      totalPrice: 0,
    }

    this.plusPrice = this.plusPrice.bind(this);
    this.minusPrice = this.minusPrice.bind(this);
  }

  plusPrice(price) {
    this.setState((oldState, _props) => ({
      totalPrice: oldState.totalPrice + price,
    }));
  }

  minusPrice(price) {
    this.setState((oldState, _props) => ({
      totalPrice: oldState.totalPrice - price,
    }));
  }

  render() {
    const { totalPrice } = this.state;
    return (
      <div>
        <header className="header-cart-page">
          <img src={ cartIcon } alt="cart icon" className="cart-icon" />
          <h1>Carrinho de Compras</h1>
        </header>
        <CartProductItem product= { product } plusPrice={ this.plusPrice } minusPrice={ this.minusPrice } />
        <CartProductItem product= { product2 } plusPrice={ this.plusPrice } minusPrice={ this.minusPrice } />

        <p>{`Preço Total: R$ ${totalPrice}`}</p>

      </div>
    );
  }
}

export default CartPage;
