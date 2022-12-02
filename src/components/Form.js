import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form className="form">
        <label htmlFor="cardName">
          Nome da Carta:
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            id="cardName"
            onChange={ onInputChange }
            value={ cardName }
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição:
          <textarea
            type="textarea"
            name="cardDescription"
            data-testid="description-input"
            id="cardDescription"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </label>

        <label htmlFor="cardAttr1">
          Atributo 01:
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            id="cardAttr1"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </label>

        <label htmlFor="cardAttr2">
          Atributo 02:
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            id="cardAttr2"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </label>

        <label htmlFor="cardAttr3">
          Atributo 03:
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            id="cardAttr3"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </label>

        <label htmlFor="cardImage">
          Imagem:
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            id="cardImage"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>

        <label htmlFor="cardRare">
          Raridade:
          <select
            type="select"
            name="cardRare"
            data-testid="rare-input"
            id="cardRare"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="cardTrunfo">
          Super Trunfo:
          <input
            type="checkbox"
            name="cardTrunfo"
            data-testid="trunfo-input"
            id="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          type="button"
          name="btn"
          data-testid="save-button"
          id="btn"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
};

export default Form;
