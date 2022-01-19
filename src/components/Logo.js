//Stylesheets
import "../stylesheets/Logo.css"

//Logo = The notepadImgLogo + The notepad text
const Logo = () => {
  return (
    <div className="logo">
      <img
        style={{ width: "80px" }}
        src="https://res.cloudinary.com/duscflsvf/image/upload/v1632013750/Add_a_subheading_mbt1my.png"
        alt="Logo"
      />
      <h1 >THE NOTEPAD</h1>
    </div>
  );
};

export default Logo;
