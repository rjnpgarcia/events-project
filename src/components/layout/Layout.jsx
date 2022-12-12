import phone from "../../assets/icons/phone.png";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Layout(props) {
  return (
    <div>
      <header>
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <div className="px-0" id={classes.rectangle}></div>
            </Col>
            <Col md="4" className="text-end">
              <img src={phone} alt="phone" id={classes.phone} />
              <span id={classes.contact}>123-234-5678</span>
            </Col>
          </Row>
        </Container>
        <div id={classes.line1} />
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <h1>Events</h1>
              <p>Learn more about our 2022 Hellocare Advantage Plans.</p>
            </Col>
          </Row>
        </Container>
      </header>
      <nav>
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className={classes.navbox}>
              <MainNavigation />
            </Col>
          </Row>
        </Container>
      </nav>
      {props.children}
      <footer className="footer">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <p>© 2020 Diamond Health Plan. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Layout;
