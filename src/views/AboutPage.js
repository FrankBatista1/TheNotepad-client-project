import "../stylesheets/Aboutpage.css";

const AboutPage = () => {
  return (
    <>
      <div className="centerabout">
        <div>
          <img
            className="logoaboutlogoimg"
            src="https://res.cloudinary.com/duscflsvf/image/upload/v1632013750/Add_a_subheading_mbt1my.png" alt="About logo img"
          ></img>
          <h1 className="titleaboutpage">THE NOTEPAD</h1>
        </div>
      </div>
      <div >
        <h2 style={{color: "white", display: 'flex', justifyContent: 'center'}}>A notepad app to add your personal notes</h2>
      </div>
      
    </>
  );
};

export default AboutPage;
