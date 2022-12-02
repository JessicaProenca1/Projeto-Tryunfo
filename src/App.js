import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
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
    isSaveButtonDisabled: true,
  };

  validacaoBotao = () => {
    const { cardName, cardDescription, cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const naovazio = cardName !== '' && cardDescription !== '' && cardImage !== '' && cardRare !== '';
    const soma210 = (parseInt(cardAttr1) + parseInt(cardAttr2) + parseInt(cardAttr3)) <= 210;
    const ate90 = cardAttr1 <= 90 && cardAttr2 <= 90 && cardAttr3 <= 90;
    const maior0 = cardAttr1 >= 0 && cardAttr2 >= 0 && cardAttr3 >= 0;

    this.setState({
      isSaveButtonDisabled: !(naovazio && soma210 && ate90 && maior0),
    })
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validacaoBotao);
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;

    return (
      <main>
        <h1>Tryunfo</h1>
        <Form { ...this.state } onInputChange={ this.onInputChange } />
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
      </main>
    );
  }
}

export default App;
