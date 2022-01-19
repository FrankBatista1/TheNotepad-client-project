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
    </>
  );
};

export default AboutPage;
