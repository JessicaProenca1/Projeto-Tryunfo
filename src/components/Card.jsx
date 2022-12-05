import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    return (
      <Container className="card">
        <p data-testid="name-card">{cardName}</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{cardDescription}</p>
        <Row className="mb-3">
          <Badge bg="primary" as={ Col } data-testid="attr1-card">{cardAttr1}</Badge>
          <Badge bg="success" as={ Col } data-testid="attr2-card">{cardAttr2}</Badge>
          <Badge bg="warning" as={ Col } data-testid="attr3-card">{cardAttr3}</Badge>
        </Row>

        <p data-testid="rare-card">{cardRare}</p>
        <div>
          {cardTrunfo === true && (<p data-testid="trunfo-card">Super Trunfo</p>)}
        </div>
      </Container>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
