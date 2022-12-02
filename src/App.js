import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
      </main>
    );
  }
}

export default App;
