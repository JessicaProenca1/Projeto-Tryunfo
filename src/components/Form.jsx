import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Form2 extends React.Component {
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

    const input = (<Form.Check
      label="Super Trunfo"
      type="checkbox"
      name="cardTrunfo"
      data-testid="trunfo-input"
      id="cardTrunfo"
      checked={ cardTrunfo }
      onChange={ onInputChange }
    />);

    return (
      <Form className="mb-3">
        <Row className="mb-3">
          <Form.Group htmlFor="cardName">
            <Form.Label id="basic-addon2">Nome da Carta:</Form.Label>
            <Form.Control
              type="text"
              name="cardName"
              data-testid="name-input"
              id="cardName"
              onChange={ onInputChange }
              value={ cardName }
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group htmlFor="cardDescription">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control
              as="textarea"
              type="textarea"
              name="cardDescription"
              data-testid="description-input"
              id="cardDescription"
              onChange={ onInputChange }
              value={ cardDescription }
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={ Col } htmlFor="cardAttr1">
            <Form.Label id="basic-addon2">Atributo 01:</Form.Label>
            <Form.Control
              type="number"
              name="cardAttr1"
              data-testid="attr1-input"
              id="cardAttr1"
              onChange={ onInputChange }
              value={ cardAttr1 }
            />
          </Form.Group>

          <Form.Group as={ Col } htmlFor="cardAttr2">
            <Form.Label id="basic-addon2">Atributo 02:</Form.Label>
            <Form.Control
              type="number"
              name="cardAttr2"
              data-testid="attr2-input"
              id="cardAttr2"
              onChange={ onInputChange }
              value={ cardAttr2 }
            />
          </Form.Group>

          <Form.Group as={ Col } htmlFor="cardAttr3">
            <Form.Label id="basic-addon2">Atributo 03:</Form.Label>
            <Form.Control
              type="number"
              name="cardAttr3"
              data-testid="attr3-input"
              id="cardAttr3"
              onChange={ onInputChange }
              value={ cardAttr3 }
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group htmlFor="cardImage">
            <Form.Label id="basic-addon2">Imagem:</Form.Label>
            <Form.Control
              type="text"
              name="cardImage"
              data-testid="image-input"
              id="cardImage"
              onChange={ onInputChange }
              value={ cardImage }
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={ Col } htmlFor="cardRare">
            <Form.Label id="basic-addon2">Raridade:</Form.Label>
            <Form.Select
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
            </Form.Select>
          </Form.Group>

          <Form.Group as={ Col } htmlFor="cardTrunfo">
            {
              hasTrunfo === true
                ? <p>Você já tem um Super Trunfo em seu baralho</p>
                : input
            }
          </Form.Group>
        </Row>

        <Button
          variant="success"
          type="button"
          name="btn"
          data-testid="save-button"
          id="btn"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </Button>
      </Form>
    );
  }
}

Form2.propTypes = {
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

export default Form2;
