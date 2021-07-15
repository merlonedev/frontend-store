import React from 'react';
import { PageHeader } from '../styles/styledComponents';
import logo from '../images/logo.png';

class Header extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <PageHeader>
        <img src={ logo } alt="logo" />
        <h4>Tryber Express</h4>
        <div>
          { children }
        </div>
      </PageHeader>
    );
  }
}

export default Header;
