import React from 'react';
import { Link } from 'react-router-dom';
// import ShoppingCartIcon from './ShoppingCartIcon';

class BackHome extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img src="https://image.flaticon.com/icons/png/512/271/271218.png" className="icon-size" alt="teste" />
        </Link>
      </div>
    );
  }
}

export default BackHome;
