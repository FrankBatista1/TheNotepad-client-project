import "../stylesheets/FormPage.css";
import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import "../stylesheets/FormPage.css";
import Logo from '../components/Logo'

const FormPage = () => {
  return (
    <>
      <div className="parent">
        <Link to="/" className="thenotepadlanding">THE NOTEPAD</Link>
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
