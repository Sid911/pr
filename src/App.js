import React from 'react';
import TitleBar from "./TitleBar/TitleBar"
import {Row,Col} from 'atomize'

function App() {
  return (
    <div>
      <Col>
        <Row>
          <TitleBar/>
        </Row>
      </Col>
    </div>
  );
}

export default App;
