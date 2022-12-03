import React from 'react';
import PropTypes from 'prop-types';

class Filtro extends React.Component {
  render() {
    const { nameFilter, rareFilter, trunfoFilter, onInputChange, disabled } = this.props;
    return (
      <>
        <p>Filtrar Cartas:</p>
        <label htmlFor="nameFilter">
          Por nome:
          <input
            data-testid="name-filter"
            type="text"
            name="nameFilter"
            id="nameFilter"
            onChange={ onInputChange }
            value={ nameFilter }
            disabled={ disabled }

          />
        </label>
        <label htmlFor="rareFilter">
          Por raridade:
          <select
            data-testid="rare-filter"
            type="select"
            name="rareFilter"
            id="rareFilter"
            onChange={ onInputChange }
            value={ rareFilter }
            disabled={ disabled }

          >
            <option value="">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfoFilter">
          Super Trunfo:
          <input
            type="checkbox"
            name="trunfoFilter"
            data-testid="trunfo-filter"
            id="trunfoFilter"
            checked={ trunfoFilter }
            onChange={ onInputChange }
          />
        </label>
      </>
    );
  }
}

Filtro.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Filtro;
