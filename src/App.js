import React from 'react';
import TitleBar from "./TitleBar/TitleBar"
import {Div} from 'atomize'

function App() {
  return (
    <Div bg="info200" style={{minHeight:"100%"}}>
      <TitleBar/>
    </Div>
  );
}

export default App;
