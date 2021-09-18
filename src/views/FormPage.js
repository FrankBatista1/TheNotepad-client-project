import "../stylesheets/FormPage.css";
import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import "../stylesheets/FormPage.css";
import { width } from "dom-helpers";

const FormPage = () => {
  return (
    <>
      <div className="parent">
        <h1 className="thenotepadlanding">THE NOTEPAD</h1>
      </div>
      <div className="loginform">
        <div className="parent">
          <FormInput placeholder="Enter your username" type="text" />
        </div>
        <div className="passwordform">
          <FormInput placeholder="Enter password" type="text" />
        </div>
      </div>
      <div>
        <div className="parent2" >
          <Link className="start" to="/fields">
            LOGIN
          </Link>
          </div>
          <div className="forgotpass">
            <Link className="forgotpass_btn">Forgot password?</Link>
          </div>
        </div>
    </>
  );
};

export default FormPage;
