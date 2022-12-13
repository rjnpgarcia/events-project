import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MultiSlider from "../MultiSlider";
import classes from "./Dates.module.css";

function Dates() {
  return (
    <Container className={classes.containerDate}>
      <Row className="justify-content-center">
        <Col lg="12">
          <MultiSlider />
        </Col>
      </Row>
    </Container>
  );
}

export default Dates;
