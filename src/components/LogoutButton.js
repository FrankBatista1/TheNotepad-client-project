import React from "react";

const authToken = process.env.REACT_APP_AUTH_TOKEN_NAME

const LogoutButton = (props) => {
  const logoutHandler = () => {
    localStorage.removeItem(authToken);
    props.history.push("/");
  }

  //Bottom right corner buttons (could add more)
  return (
    <div className="bottom-buttons">
      <button className="start" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
