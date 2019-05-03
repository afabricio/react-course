import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

function App() {

  return (
    <Pai>
      <Filho nome="abc" />

    </Pai>
  );
}

export default App;
