import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MultiSlider from "../MultiSlider";
import classes from "./Dates.module.css";

function Dates() {
  const months = [
    { id: 0, month: "OCT", year: "2022" },
    { id: 1, month: "NOV", year: "2022" },
    { id: 2, month: "DEC", year: "2022" },
    { id: 3, month: "JAN", year: "2023" },
    { id: 4, month: "FEB", year: "2023" },
    { id: 5, month: "MAR", year: "2023" },
    { id: 6, month: "APR", year: "2023" },
    { id: 7, month: "MAY", year: "2023" },
    { id: 8, month: "JUN", year: "2023" },
    { id: 9, month: "JUL", year: "2023" },
    { id: 10, month: "AUG", year: "2023" },
    { id: 11, month: "SEP", year: "2023" },
  ];
  return (
    <Container className={classes.containerDate}>
      <Row className="justify-content-center">
        <Col lg="12">
          <MultiSlider data={months} />
        </Col>
      </Row>
    </Container>
  );
}

export default Dates;
