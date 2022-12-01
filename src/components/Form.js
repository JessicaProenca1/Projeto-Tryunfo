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
        <label htmlFor="name">
          Nome da Carta:
          <input
            type="text"
            name="name"
            data-testid="name-input"
            id="name"
            onChange={ onInputChange }
            value={ cardName }
          />
        </label>

        <label htmlFor="textarea">
          Descrição:
          <textarea
            type="textarea"
            name="textarea"
            data-testid="description-input"
            id="textarea"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </label>

        <label htmlFor="number1">
          Atributo 01:
          <input
            type="number"
            name="number1"
            data-testid="attr1-input"
            id="number1"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </label>

        <label htmlFor="number2">
          Atributo 02:
          <input
            type="number"
            name="number2"
            data-testid="attr2-input"
            id="number2"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </label>

        <label htmlFor="number3">
          Atributo 03:
          <input
            type="number"
            name="number3"
            data-testid="attr3-input"
            id="number3"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </label>

        <label htmlFor="imagem">
          Imagem:
          <input
            type="text"
            name="imagem"
            data-testid="image-input"
            id="imagem"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>

        <label htmlFor="raridade">
          Raridade:
          <select
            type="select"
            name="raridade"
            data-testid="rare-input"
            id="raridade"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super Trunfo:
          <input
            type="checkbox"
            name="trunfo"
            data-testid="trunfo-input"
            id="trunfo"
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
