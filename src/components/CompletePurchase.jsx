import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import faustao from '../img/faustao.gif';

export default class CompletePurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      willReturn: false,
    };
    this.redirecting = this.redirecting.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  redirecting() {
    const timeout = 3500;
    setTimeout(() => {
      if (this.mounted) {
        this.setState({ willReturn: true });
      }
    }, timeout);
  }

  render() {
    this.redirecting();
    const { willReturn } = this.state;
    return (
      <div>
        { willReturn && <Redirect to="/" /> }
        <h1>Parabéns, sua compra foi finalizada!</h1>
        <img
          src={ faustao }
          alt="Gif do Faustão"
          className="gif-faustao"
        />
        <h2>Agradecemos pela sua preferência</h2>
        <h3>e esperamos que tenha curtido sua experiência</h3>
        <p>Voltando pra página inicial!</p>
      </div>
    );
  }
}
