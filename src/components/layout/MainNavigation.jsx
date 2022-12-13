import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import classes from "./MainNavigation.module.css";
import { useState } from "react";

function MainNavigation(props) {
  const [active, setActive] = useState("/");
  const navLinkStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "3px solid #00857A" : "",
      color: "#333333",
    };
  };
  return (
    <Nav
      className="justify-content-start"
      activeKey={active}
      onSelect={(selectedKey) => setActive(selectedKey)}
    >
      <Nav.Item>
        <Nav.Link
          as={NavLink}
          to="/"
          className={classes.tab}
          style={navLinkStyles}
        >
          Nevada
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={NavLink}
          to="/south-texas"
          className={classes.tab}
          style={navLinkStyles}
        >
          South Texas
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MainNavigation;
