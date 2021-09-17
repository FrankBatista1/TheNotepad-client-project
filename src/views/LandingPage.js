import "../stylesheets/LandingPage.css";
import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import "../stylesheets/LandingPage.css";
import { width } from "dom-helpers";

const LandingPage = () => {
  return (
    <>
      <div className="parent">
        <h1 className="thenotepadlanding">THE NOTEPAD</h1>
      </div>
      <div>
        <FormInput placeholder="Enter your username" type="text" />
        <FormInput placeholder="Enter password" type="text" />
      </div>
      <div className="parent">
        <Link className="start" to="/fields">
          Join
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
