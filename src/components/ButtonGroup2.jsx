import React, { Component, createElement } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

class ButtonGroup2 extends Component {
  render() {
    return (
      <div>
        <ButtonGroup>
          <Button
            onClick={ () => {
              setItemCount(Math.max(itemCount - 1, 0));
            } }
          >
            {' '}
            {createElement(
              RemoveIcon,
              { fontSize: 'small' },
            )}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={ () => {
              setItemCount(itemCount + 1);
            } }
          >
            {createElement(
              AddIcon,
              { fontSize: 'small' },
            )}
            <AddIcon fontSize="small" />
            {' '}
            {/* Função createElement usada de acordo com https://reactjs.org/docs/jsx-in-depth.html */}
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default ButtonGroup2;
