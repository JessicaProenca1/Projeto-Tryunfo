import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { funcExcluir, id } = this.props;
    return (
      <button
        variant="primary"
        data-testid="delete-button"
        type="button"
        onClick={ funcExcluir }
        id={ id }
      >
        Excluir
      </button>
    );
  }
}

Button.propTypes = {
  funcExcluir: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Button;
