import PersonCard from './components/PersonCard';

import {Container, Row, Col} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <PersonCard
            lastName={"Doe"}
            firstName={"Jane"}
            age={45}
            hair={"Black"}
          />
          <PersonCard
            lastName={"Smith"}
            firstName={"John"}
            age={88}
            hair={"Brown"}
          />
        </Col>
        <Col>
        <PersonCard
            lastName={"Fillmore"}
            firstName={"Millard"}
            age={50}
            hair={"Brown"}
          />
          <PersonCard
            lastName={"Smith"}
            firstName={"Maria"}
            age={62}
            hair={"Brown"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
