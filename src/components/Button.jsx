import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

class Button2 extends React.Component {
  render() {
    const { funcExcluir, id } = this.props;
    return (
      <div className="mb-2">
        <Button
          variant="danger"
          data-testid="delete-button"
          type="button"
          onClick={ funcExcluir }
          id={ id }
        >
          Excluir
        </Button>
      </div>
    );
  }
}

Button2.propTypes = {
  funcExcluir: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Button2;
