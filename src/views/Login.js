import "../stylesheets/FormPage.css";
import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import "../stylesheets/FormPage.css";
import '../stylesheets/Form.css'
import { useState, useEffect} from "react";
import axios from "axios";

const FormPage = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  useEffect(() => {
    if(localStorage.getItem('authToken')){
      history.push('/fields')
    }
  }, [history])

  const loginHandler = async (e) => {
    e.preventdefault()

    const config = {
      header: {
        "Content-Type": "application/json"
      }
      
    }
    try {
      const {data} = await axios.post("/api/auth/login", {email, password},
      config);

      localStorage.setItem("authToken", data.token)

      history.push('/fields');
    } catch (error) {
      setError(error.response.data.error)
      setTimeout(() => {
        setError("")
      }, 4000) 
    }
  }

  return (
    <>
      <div className="parent">
        <Link to="/" className="thenotepadlanding">
          THE NOTEPAD
        </Link>
      </div>

      <form onSubmit={loginHandler} className="loginform">
      {error && <span className="errormsg">{error}</span>}
        <div className="parent">
        <div className="row">
          <input
            required
            id="email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
        </div>
        <div className="passwordform">
        <div className="row">
          <input
            required
            id="password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <div className="parent2">
            <button type="submit" className="start" >
              LOGIN
            </button>
          </div>
        </div>
      </form>
      <div>
        <div className="forgotpass">
          <Link className="forgotpass_btn">Forgot password?</Link>
        </div>
      </div>
    </>
  );
};

export default FormPage;