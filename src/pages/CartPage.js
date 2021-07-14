import React, { Component } from 'react';
import CartItems from '../components/CartItems';

const testCart = [
  {
    id: 'MLB923744806',
    site_id: 'MLB',
    title: 'Pequeno Principe, O',
    seller: {
      id: 263929924,
      permalink: 'http://perfil.mercadolivre.com.br/LIVRARIACULTURACULTURA',
      power_seller_status: 'platinum',
      car_dealer: false,
      real_estate_agency: false,
      tags: [],
    },
    price: 80.83,
    currency_id: 'BRL',
    available_quantity: 500,
    sold_quantity: 500,
    buying_mode: 'buy_it_now',
    listing_type_id: 'gold_pro',
    stop_time: '2037-10-08T11:20:36.000Z',
    condition: 'new',
    permalink: 'https://produto.mercadolivre.com.br/MLB-923744806-pequeno-principe-o-_JM',
    thumbnail: 'http://mlb-s1-p.mlstatic.com/835599-MLB26167839876_102017-I.jpg',
    accepts_mercadopago: true,
    installments: null,
    address: {
      state_id: 'BR-SP',
      state_name: 'São Paulo',
      city_id: 'BR-SP-41',
      city_name: 'Guarulhos',
    },
    shipping: {
      free_shipping: true,
      mode: 'me1',
      tags: [],
      logistic_type: 'default',
      store_pick_up: false,
    },
    seller_address: {
      id: '',
      comment: '',
      address_line: '',
      zip_code: '',
      country: {
        id: 'BR',
        name: 'Brasil',
      },
      state: {
        id: 'BR-SP',
        name: 'São Paulo',
      },
      city: {
        id: 'BR-SP-41',
        name: 'Guarulhos',
      },
      latitude: '',
      longitude: '',
    },
    attributes: [
      {
        values: [
          {
            id: null,
            name: 'CAMINHO SUAVE ED.',
            struct: null,
            source: 252977589148881,
          },
        ],
        attribute_group_id: 'OTHERS',
        source: 252977589148881,
        id: 'BRAND',
        value_id: null,
        value_struct: null,
        attribute_group_name: 'Outros',
        name: 'Marca',
        value_name: 'CAMINHO SUAVE ED.',
      },
      {
        id: 'ITEM_CONDITION',
        name: 'Condição do item',
        attribute_group_name: 'Outros',
        values: [
          {
            id: '2230284',
            name: 'Novo',
            struct: null,
            source: 1,
          },
        ],
        attribute_group_id: 'OTHERS',
        source: 1,
        value_id: '2230284',
        value_name: 'Novo',
        value_struct: null,
      },
      {
        id: 'MODEL',
        name: 'Modelo',
        value_id: null,
        value_name: 'Brochura',
        values: [
          {
            name: 'Brochura',
            struct: null,
            source: 252977589148881,
            id: null,
          },
        ],
        value_struct: null,
        attribute_group_id: 'OTHERS',
        attribute_group_name: 'Outros',
        source: 252977589148881,
      },
    ],
    differential_pricing: {
      id: 33580182,
    },
    original_price: null,
    category_id: 'MLB437616',
    official_store_id: 1140,
    catalog_product_id: null,
    tags: [
      'brand_verified',
      'good_quality_picture',
      'immediate_payment',
      'cart_eligible',
      'shipping_guaranteed',
    ],
  },
  {
    id: 'MLB918281211',
    site_id: 'MLB',
    title: 'Diário De Anne Frank Livro Novo Lacrado Com Fotos Autenticas',
    seller: {
      id: 207333581,
      permalink: 'http://perfil.mercadolivre.com.br/SPMIX+SHOP',
      power_seller_status: 'gold',
      car_dealer: false,
      real_estate_agency: false,
      tags: [],
      eshop: {
        nick_name: 'SPMIX SHOP',
        eshop_rubro: null,
        eshop_id: 263849,
        eshop_locations: [],
        site_id: 'MLB',
        eshop_logo_url: 'http://resources.mlstatic.com/eshops/207333581v804e60.png',
        eshop_status_id: 1,
        seller: 207333581,
        eshop_experience: 0,
      },
    },
    price: 21.3,
    currency_id: 'BRL',
    available_quantity: 3,
    sold_quantity: 500,
    buying_mode: 'buy_it_now',
    listing_type_id: 'gold_special',
    stop_time: '2040-01-18T21:32:05.000Z',
    condition: 'new',
    permalink: 'https://produto.mercadolivre.com.br/MLB-918281211-diario-de-anne-frank-livro-novo-lacrado-com-fotos-autenticas-_JM',
    thumbnail: 'http://mlb-s2-p.mlstatic.com/761859-MLB31712575492_082019-I.jpg',
    accepts_mercadopago: true,
    installments: {
      quantity: 4,
      amount: 5.77,
      rate: 8.31,
      currency_id: 'BRL',
    },
    address: {
      state_id: 'BR-SP',
      state_name: 'São Paulo',
      city_id: 'BR-SP-31',
      city_name: 'Osasco',
    },
    shipping: {
      free_shipping: false,
      mode: 'me2',
      tags: [
        'fulfillment',
      ],
      logistic_type: 'fulfillment',
      store_pick_up: false,
    },
    seller_address: {
      id: '',
      comment: '',
      address_line: '',
      zip_code: '',
      country: {
        id: 'BR',
        name: 'Brasil',
      },
      state: {
        id: 'BR-SP',
        name: 'São Paulo',
      },
      city: {
        id: 'BR-SP-31',
        name: 'Osasco',
      },
      latitude: '',
      longitude: '',
    },
    attributes: [
      {
        value_id: '2230284',
        value_name: 'Novo',
        values: [
          {
            source: 1,
            id: '2230284',
            name: 'Novo',
            struct: null,
          },
        ],
        attribute_group_name: 'Outros',
        source: 1,
        name: 'Condição do item',
        value_struct: null,
        attribute_group_id: 'OTHERS',
        id: 'ITEM_CONDITION',
      },
    ],
    original_price: null,
    category_id: 'MLB437616',
    official_store_id: null,
    catalog_product_id: null,
    tags: [
      'dragged_bids_and_visits',
      'poor_quality_picture',
      'immediate_payment',
      'cart_eligible',
      'shipping_guaranteed',
    ],
  },
];

class CartPage extends Component {
  totalValue() {
    const total = testCart.reduce((acc, { price }) => acc + price, 0);
    return total;
  }

  render() {
    return (
      <div>
        <h1>SHOPPING CART</h1>
        <CartItems testCart={ testCart } />
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
        <p>{ this.totalValue() }</p>
        <button
          type="button"
        >
          Finalizar Compra
        </button>
      </div>
    );
  }
}

export default CartPage;
