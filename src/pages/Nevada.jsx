import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Pages.module.css";
import Dates from "../components/assets/Dates";
import Featured from "../components/assets/Featured";
import WalkIn from "../components/assets/WalkIn";
import Seminars from "../components/assets/Seminars";

function NevadaPage() {
  const nevadaDummyData = [
    {
      id: 1,
      day: "5",
      title: "Prospective Member Benefits Overview Seminar",
      address: "Prominence Health Plan Office 1155 South Congress Avenue",
      city: "WEST PALM BEACH, FLORIDA 33406",
      when: "Sat, October 5, 2022, 8:00am",
      when2: "Sat, October 5, 2022, 11:00am",
      featured: false,
      walkIn: false,
    },
    {
      id: 2,
      day: "6",
      title: "Premium Seminar",
      address: "Prominence Health Plan MA 1510 Meadow Wood Lane",
      city: "RENO, NEVADA 89502",
      when: "Sun, October 6, 2022, 8:00am",
      featured: true,
      walkIn: false,
    },
    {
      id: 3,
      day: "6",
      title: "VIP members benefits Seminar",
      address: "Prominence Health Plan MA 1510 Meadow Wood Lane",
      city: "RENO, NEVADA 89502",
      when: "Sun, October 6, 2022, 11:00am",
      featured: true,
      walkIn: false,
    },
    {
      id: 4,
      day: "7",
      title: "Prospective Member Benefits",
      address: "Prominence Health Plan Office 1155 South Congress Avenue",
      city: "WEST PALM BEACH, FLORIDA 33406",
      when: "Mon, October 7, 2022, 8:00am",
      when2: "Mon, October 7, 2022, 11:00am",
      featured: true,
      walkIn: false,
    },
    {
      id: 5,
      day: "8",
      title: "Advanced benefits Seminar",
      address: "Prominence Health Plan MA 1510 Meadow Wood Lane",
      city: "RENO, NEVADA 89502",
      when: "Tue, October 8, 2022, 8:00am",
      featured: false,
      walkIn: true,
    },
    {
      id: 6,
      day: "11",
      title: "Prospective Members",
      address: "Prominence Health Plan Office 1155 South Congress Avenue",
      city: "WEST PALM BEACH, FLORIDA 33406",
      when: "Fri, October 11, 2022, 8:00am",
      featured: false,
      walkIn: true,
    },
    {
      id: 7,
      day: "13",
      title: "Special Advanced Seminar",
      address: "Prominence Health Plan MA 1510 Meadow Wood Lane",
      city: "RENO, NEVADA 89502",
      when: "Tue, October 13, 2022, 8:00am",
      featured: false,
      walkIn: true,
    },
    {
      id: 8,
      day: "16",
      title: "Hellocare Benefits Seminar",
      address: "Prominence Health Plan Office 1155 South Congress Avenue",
      city: "WEST PALM BEACH, FLORIDA 33406",
      when: "Wed, October 15, 2022, 8:00am",
      featured: true,
      walkIn: true,
    },
    {
      id: 9,
      day: "25",
      title: "Hellocare Members Seminar",
      address: "Prominence Health Plan Office 1155 South Congress Avenue",
      city: "WEST PALM BEACH, FLORIDA 33406",
      when: "Sat, October 25, 2022, 10:00am",
      featured: false,
      walkIn: true,
    },
    {
      id: 10,
      day: "30",
      title: "Final Seminar",
      address: "Prominence Health Plan MA 1510 Meadow Wood Lane",
      city: "RENO, NEVADA 89502",
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
                  <Featured contents={nevadaDummyData} />
                </Col>
                <Col md="3" className={classes.colWalkin}>
                  <h5>Walk-in Events</h5>
                  <WalkIn contents={nevadaDummyData} />
                </Col>
              </Row>
            </Container>
            <Container className={classes.containerSeminar}>
              <Seminars contents={nevadaDummyData} />
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NevadaPage;
