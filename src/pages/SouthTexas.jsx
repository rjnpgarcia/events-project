import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Pages.module.css";
import Dates from "../components/assets/Dates";

function SouthTexasPage() {
  return (
    <div>
      <Container className={classes.containerDates}>
        <Row className="justify-content-center">
          <Col md="8">
            <Dates />
            South Texas
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SouthTexasPage;
