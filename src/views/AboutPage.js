import { flexbox } from "@mui/system";
import "../stylesheets/Aboutpage.css";

const AboutPage = () => {
  return (
    <>
      <div className="centerabout">
        <div>
          <img
            className="logoaboutlogoimg"
            src="https://res.cloudinary.com/duscflsvf/image/upload/v1632013750/Add_a_subheading_mbt1my.png"
          ></img>
          <h1 className="titleaboutpage">THE NOTEPAD</h1>
        </div>
      </div>
      <div >
        <h2 style={{color: "white", display: 'flex', justifyContent: 'center'}}>Work in progress come back later :D</h2>
      </div>
      
    </>
  );
};

export default AboutPage;
