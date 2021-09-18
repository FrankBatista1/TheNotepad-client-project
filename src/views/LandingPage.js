import "../stylesheets/LandingPage.css";
import { Link } from "react-router-dom";
import "../stylesheets/FormPage.css";

const LandingPage = () => {
  return (
    <>
      <div className= "split left">
      <div className= "centered">
        <h1 className="titleLandingPage">THE NOTEPAD</h1>
        <h3 className="titleLandingPage">Welcome to THE NOTEPAD a simple notepad whit basic features to organize and edit your notes, projects or ideas.</h3>
        <Link className="start" to='/loginscreen'>START</Link>
        </div>
      </div>
      <div className= "split right">
      <div className="centeredimage">
        <img style={{width: '100%'}} src="https://res.cloudinary.com/duscflsvf/image/upload/v1631997490/Screen_Shot_2021-09-18_at_4.37.42_PM_gj7bbv.png"></img>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
