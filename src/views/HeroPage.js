import "../stylesheets/HeroPage.css";
import { Link } from "react-router-dom";
import "../stylesheets/FormPage.css";
import Logo from "../components/Logo";

const HeroPage = () => {
  return (
    <>
      <div>
        <div className="split left">
          <div className="centered">
          <Logo></Logo>
            <h1 className="titleHeroPage">Write stuff in a simple way</h1>
            <p
              style={{ color: "rgb(150, 150, 150)" }}
              className="titleHeroPage"
            >
              A simple notepad whit basic features to organize and edit your
              notes, projects and ideas.
            </p>
            <Link className="start" to="/login">
              START
            </Link>
            <Link
              style={{ marginLeft: "10px" }}
              className="start"
              to="/about"
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
              alt="Demo Img"
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

export default HeroPage;
