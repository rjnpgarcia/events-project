import phone from "../../assets/icons/phone.png";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <header>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div>
                <div id={classes.rectangle}></div>
              </div>
            </div>
            <div className="col">
              <img src={phone} alt="phone" id={classes.phone} />
              <span id={classes.contact}>123-234-5678</span>
            </div>
          </div>
        </div>
        <div id={classes.line1} />
        <div className="container col-md-12">
          <h1>Events</h1>
          <p>Learn more about our 2022 Hellocare Advantage Plans.</p>
        </div>
      </header>

      <footer className="footer">
        <div className="row">
          <div className="col-lg-12">
            <p className="m-0 text-center">
              © 2020 Diamond Health Plan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
