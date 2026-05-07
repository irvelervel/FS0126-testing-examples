import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import HiddenSection from './components/HiddenSection'
import PostList from './components/PostList'

function App() {
  return (
    <Container>
      <Row className="mt-3">
        <Col className="text-center">
          <h1>Il testing dei componenti in React</h1>
        </Col>
      </Row>
      <Row className="mt-3 justify-content-center">
        <Col className="text-center" xs={12} md={6}>
          {/* <HiddenSection /> */}
          <PostList />
        </Col>
      </Row>
    </Container>
  )
}

export default App
