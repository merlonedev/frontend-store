import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import errou from '../img/faustao-errou.gif';

export default class NotFound extends Component {
  constructor() {
    super();
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
    const { willReturn } = this.state;
    this.redirecting();
    return (
      <div>
        { willReturn && <Redirect to="/" />}
        <h1>Acho que você errou o endereço...</h1>
        <img
          src={ errou }
          alt="Faustão diz que você errou"
          className="gif-faustao"
        />
        <h3>mas não se preocupe que já te levamos de volta!</h3>
      </div>
    );
  }
}
