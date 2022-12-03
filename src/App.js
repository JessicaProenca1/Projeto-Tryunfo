import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Button from './components/Button';
import Filtro from './components/Filtro';
import './style.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
    nameFilter: '',
    rareFilter: '',
    trunfoFilter: false,
    disabled: false,
  };

  validacaoBotao = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;

    const naovazio = cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== '';

    const duzentosDez = 210;
    const soma210 = (parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10))
    <= duzentosDez;
    const noventa = 90;
    const ate90 = cardAttr1 <= noventa && cardAttr2 <= noventa && cardAttr3 <= noventa;
    const maior0 = cardAttr1 >= 0 && cardAttr2 >= 0 && cardAttr3 >= 0;

    this.setState({
      isSaveButtonDisabled: !(naovazio && soma210 && ate90 && maior0),
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
      disabled: value,
    }, this.validacaoBotao);
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;

    const newCard = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };

    const valor = cardTrunfo === true;

    this.setState(({ cards }) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: valor,
      isSaveButtonDisabled: true,
      cards: [...cards, newCard],
    }));
  };

  funcExcluir = (carta) => {
    const { cards } = this.state;
    const cartasNaoDeletadas = cards
      .filter((cardExcluir) => cardExcluir.cardName !== carta);
    const trunfo = cartasNaoDeletadas
      .some((cardExcluir) => cardExcluir.cardTrunfo === true);
    const valor = trunfo === true;
    this.setState({
      hasTrunfo: valor,
      cards: cartasNaoDeletadas,
    });
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cards,
      nameFilter,
      rareFilter,
      trunfoFilter } = this.state;

    return (
      <main>
        <section>
          <h1>Tryunfo</h1>
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
        <section>
          <Filtro
            { ...this.state }
            nameFilter={ nameFilter }
            rareFilter={ rareFilter }
            trunfoFilter={ trunfoFilter }
            onInputChange={ this.onInputChange }
          />
        </section>
        <section>
          { cards
            .filter((card) => (card.cardName.includes(nameFilter)))
            .filter((raridade) => (rareFilter === 'raro'
              ? raridade.cardRare === rareFilter
              : raridade.cardRare.includes(rareFilter)))
            .filter((trunfo) => (trunfo.cardTrunfo === trunfoFilter))
            .map((card) => (
              <>
                <Card
                  key={ card.cardName }
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <Button
                  funcExcluir={ () => { this.funcExcluir(card.cardName); } }
                  id={ card.cardName }
                />
              </>
            ))}
        </section>
      </main>
    );
  }
}

export default App;
