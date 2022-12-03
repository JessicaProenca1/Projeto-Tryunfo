import React from 'react';

class Filtro extends React.Component {
  render() {
    return (
      <>
        <p>Filtrar Cartas:</p>
        <label htmlFor="name-filter">
          Por nome:
          <input
            data-testid="name-filter"
            type="text"
            name="name-filter"
            id="name-filter"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>
        <label htmlFor="rare-filter">
          Por raridade:
          <select
            data-testid="rare-filter"
            type="select"
            name="rare-filter"
            id="rare-filter"
            onChange={ onInputChange }
            value={ cardImage }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-filter">
          Super Trunfo:
          <input
            type="checkbox"
            name="trunfo-filter"
            data-testid="trunfo-filter"
            id="trunfo-filter"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
      </>
    );
  }
}

export default Filtro;
