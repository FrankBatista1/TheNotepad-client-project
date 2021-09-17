import '../stylesheets/LandingPage.css'
import React from "react";
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div>
      <h1 className="thenotepadlanding">THE NOTEPAD</h1>
      <Link to='/fields'>Test</Link>

    </div>
  );
};

export default LandingPage;
