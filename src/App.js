import React from 'react';
import * as C from './App.styles'
import photo from './images/foto.jpg'

function App() {
  return (
    <C.Container>
      <div>
        <img src={photo} alt='foto de rosto'/>
        <h4>Olá</h4>
      </div>
    </C.Container>
  );
}

export default App;
