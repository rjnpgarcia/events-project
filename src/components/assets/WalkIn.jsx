import classes from "./WalkIn.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function WalkIn() {
  return (
    <Container className={classes.containerSlider}>
      <Row className={classes.row1}>
        <Col xs={10} className={classes.column}>
          <ul>
            <li className={classes.title}>My Seminar</li>
            <li className={classes.address}>
              Prominencs Health Plan Office 1155 South Congress Avenue
            </li>
            <li className={classes.date}>
              <CalendarMonthIcon className={classes.calendarIcon} /> Sat,
              October 8, 2022, 10:00am
            </li>
          </ul>
        </Col>
        <Col xs={2}>
          <p className={classes.day}>
            Oct
            <br />8
          </p>
        </Col>
      </Row>
      <div className={classes.borderLine}>
        <hr className={classes.line} />
      </div>
      <Row className={classes.row2}>
        <Col xs={10} className={classes.column}>
          <ul>
            <li className={classes.title}>My Seminar</li>
            <li className={classes.address}>
              Prominencs Health Plan Office 1155 South Congress Avenue
            </li>
            <li className={classes.date}>
              <CalendarMonthIcon className={classes.calendarIcon} /> Sat,
              October 8, 2022, 10:00am
            </li>
          </ul>
        </Col>
        <Col xs={2}>
          <p className={classes.day}>
            Oct
            <br />8
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default WalkIn;
