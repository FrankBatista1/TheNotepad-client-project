import '../stylesheets/LandingPage.css'
import React from "react";
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <><div className='parent'>
      <h1 className="thenotepadlanding">THE NOTEPAD</h1>
    </div><div className="parent"><Link className="start" to='/fields'>Test</Link></div></>

    
  );
};

export default LandingPage;
