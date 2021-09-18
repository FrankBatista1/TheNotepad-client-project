import "../stylesheets/LandingPage.css";
import { Link } from "react-router-dom";
import "../stylesheets/FormPage.css";
import { width } from "dom-helpers";

const LandingPage = () => {
  return (
    <>
      <div>
        <div className="split left">
          <div className="centered">
            <h2 className="titleLandingPage">
              <h5 className="titleLandingPage">THE NOTEPAD</h5>
              Write stuff in a simple way
              <br />
            </h2>
            <p
              style={{ color: "rgb(150, 150, 150)" }}
              className="titleLandingPage"
            >
              A simple notepad whit basic features to organize and edit your
              notes, projects and ideas.
            </p>
            <Link className="start" to="/loginscreen">
              START
            </Link>
            <Link
              style={{ marginLeft: "10px" }}
              className="start"
              to="/loginscreen"
            >
              ABOUT
            </Link>
          </div>
        </div>
        <div className="split right">
          <div className="centeredimage">
            <img
              style={{ width: "100%" }}
              src="https://res.cloudinary.com/duscflsvf/image/upload/v1632001918/Screen_Shot_2021-09-18_at_5.51.37_PM_gjciy3.png"
            ></img>
          </div>
        </div>
      </div>
      <div className="footerPage">
        <footer className ="footerwriting">
          <p style={{paddingRight: 30}}>©THE NOTEPAD by Frank Batista</p>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
