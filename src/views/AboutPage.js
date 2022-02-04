//Stylesheets
import "../stylesheets/Aboutpage.css";
import Logo from "../components/Logo";

const AboutPage = () => {
  return (
    <>
      <Logo />

      <div>
        <h3
          style={{ color: "white", display: "flex", justifyContent: "center" }}
        >
          Keep your notes as simple as posible with our features
        </h3>
      </div>
      <div className="demo_container">
        <img
          className="demo_img"
          src="https://res.cloudinary.com/duscflsvf/image/upload/v1642822602/Screen_Shot_2022-01-18_at_11.42.08_PM_pky96g.png"
          alt="demo_img"
        />
      </div>
    </>
  );
};

export default AboutPage;
