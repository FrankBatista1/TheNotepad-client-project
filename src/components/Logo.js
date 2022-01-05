import "../stylesheets/FormPage.css";
import "../stylesheets/HeroPage.css";


//Logo = The notepadImgLogo + The notepad text
const Logo = () => {
  return (
    <div>
      <div className="titleHeroPage">
        <img
          style={{ width: "35%" }}
          src="https://res.cloudinary.com/duscflsvf/image/upload/v1632013750/Add_a_subheading_mbt1my.png"
          alt="Logo"
        />
        <h5 className="titleHeroPage">THE NOTEPAD</h5>
      </div>
    </div>
  );
};

export default Logo;
