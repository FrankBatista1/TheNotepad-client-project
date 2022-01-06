import React from "react";

const LogoutButton = (props) => {
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    props.history.push("/");
  }
  return (
    <div className="bottom-buttons">
      <button className="start" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
