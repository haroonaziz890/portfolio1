import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function AutoLayoutExample() {
  return (
    <Container fluid className="bg-black text-white py-5 mt-5">
      <Row className="align-items-center justify-content-end">
        {/* Left Side - Image */}
        <Col md={6} lg={5} className="text-center">
          <img 
            src="/assest/th.jpeg" 
            alt="Cybersecurity" 
            className="img-fluid rounded"
            style={{ maxHeight: "300px" }}
          />
        </Col>

        {/* Right Side - Text & Button */}
        <Col md={6} lg={5} className="text-end">
          <h2>Cybersecurity Solutions</h2>
          <p>
            Safeguard your digital assets with tailored cybersecurity strategies 
            and proactive defense measures.
          </p>
          <Button variant="warning">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
