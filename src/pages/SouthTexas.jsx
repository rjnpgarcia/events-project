import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Pages.module.css";
import Dates from "../components/assets/Dates";
import Featured from "../components/assets/Featured";
import WalkIn from "../components/assets/WalkIn";
import Seminars from "../components/assets/Seminars";

function SouthTexasPage() {
  const southTexasDummyData = [
    {
      id: 1,
      day: "3",
      title: "Prospective Member Benefits Overview Seminar",
      address: "Hellocare Health Plan Office 1234 Summer Lane",
      city: "SAN DIEGO, TEXAS 78384",
      when: "Thu, October 3, 2022, 8:00am",
      featured: true,
      walkIn: false,
    },
    {
      id: 2,
      day: "6",
      title: "Hellocare Seminar Texas",
      address: "Hellocare Health Plans 1234 Mavericks Lane",
      city: "RIO GRANDE, TEXAS 78582",
      when: "Sun, October 6, 2022, 8:00am",
      when2: "Sun, October 6, 2022, 11:00am",
      featured: false,
      walkIn: false,
    },
    {
      id: 3,
      day: "7",
      title: "Advanced VIP Seminar",
      address: "Hellocare Health Plans 1234 Mavericks Lane",
      city: "RIO GRANDE, TEXAS 78582",
      when: "Mon, October 7, 2022, 8:00am",
      featured: false,
      walkIn: true,
    },
    {
      id: 4,
      day: "7",
      title: "Premium Member Benefits",
      address: "Hellocare Health Plan Office 1234 Summer Lane",
      city: "SAN DIEGO, TEXAS 78384",
      when: "Mon, October 7, 2022, 8:00am",
      featured: true,
      walkIn: true,
    },
    {
      id: 5,
      day: "8",
      title: "Premium Advances Seminar",
      address: "Hellocare Health Plan Office 1234 Summer Lane",
      city: "SAN DIEGO, TEXAS 78384",
      when: "Tue, October 8, 2022, 8:00am",
      featured: true,
      walkIn: true,
    },
    {
      id: 6,
      day: "12",
      title: "Advanced VIP Seminar",
      address: "Hellocare Health Plans 1234 Mavericks Lane",
      city: "RIO GRANDE, TEXAS 78582",
      when: "Sat, October 12, 2022, 8:00am",
      featured: true,
      walkIn: true,
    },
    {
      id: 7,
      day: "14",
      title: "Hellocare Members Seminar",
      address: "Hellocare Health Plans 1234 Mavericks Lane",
      city: "RIO GRANDE, TEXAS 78582",
      when: "Wed, October 14, 2022, 8:00am",
      when2: "Wed, October 14, 2022, 11:00am",
      featured: false,
      walkIn: false,
    },
    {
      id: 8,
      day: "16",
      title: "Advance Hellocare Members",
      address: "Hellocare Health Plan Office 1234 Summer Lane",
      city: "SAN DIEGO, TEXAS 78384",
      when: "Wed, October 15, 2022, 8:00am",
      featured: true,
      walkIn: false,
    },
    {
      id: 9,
      day: "25",
      title: "Hellocare VIP Seminar",
      address: "Hellocare Health Plans 1234 Mavericks Lane",
      city: "RIO GRANDE, TEXAS 78582",
      when: "Sat, October 25, 2022, 10:00am",
      featured: false,
      walkIn: true,
    },
    {
      id: 10,
      day: "30",
      title: "Final Seminar",
      address: "Hellocare Health Plan Office 1234 Summer Lane",
      city: "SAN DIEGO, TEXAS 78384",
      when: "Thu, October 30, 2022, 8:00am",
      featured: false,
      walkIn: true,
    },
  ];

  return (
    <div>
      <Container className={classes.containerDates}>
        <Row className="justify-content-center">
          <Col md="8" className="p-0">
            <Dates />
            <Container className={classes.containerEvents}>
              <Row>
                <Col md="7" className={classes.colFeatured}>
                  <h4>Featured Events</h4>
                  <Featured contents={southTexasDummyData} />
                </Col>
                <Col md="3" className={classes.colWalkin}>
                  <h5>Walk-in Events</h5>
                  <WalkIn contents={southTexasDummyData} />
                </Col>
              </Row>
            </Container>
            <Container className={classes.containerSeminar}>
              <Seminars contents={southTexasDummyData} />
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SouthTexasPage;
