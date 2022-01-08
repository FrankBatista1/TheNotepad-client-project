import { Redirect, Route } from "react-router";

const authToken = process.env.REACT_APP_AUTH_TOKEN_NAME;

const UserPage = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem(authToken) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default UserPage;
