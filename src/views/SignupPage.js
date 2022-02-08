import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../stylesheets/FormPage.css";

const apiUrl = process.env.REACT_APP_API_URL;
const authToken = process.env.REACT_APP_AUTH_TOKEN_NAME;

const SignupPage = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem(authToken)) {
      history.push("/notes");
    }
  }, [history]);

  const signUpHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        `${apiUrl}/auth/signup`,
        { name, email, password },
        config
      );
      
      localStorage.setItem("uid", data.uid)
      localStorage.setItem(authToken, data.token);

      history.push("/notes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="formContainer" onSubmit={signUpHandler}>
        <Link to="/" className="theNotepadHeader">
          THE NOTEPAD
        </Link>
        {error && <span className="errormsg">{error}</span>}
        <input
          className="formInput"
          required
          id="name"
          placeholder="Name"
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="formInput"
          required
          id="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="formInput"
          required
          id="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="start">
          LOGIN
        </button>
        <div className="botbuttons">
          <Link to="/login" className="botbuttons_btn">
            Already have an account?
          </Link>
          <Link to="/" className="botbuttons_btn">
            Forgot password?
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignupPage;
