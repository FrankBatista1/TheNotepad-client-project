import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FieldsPage from "./views/FieldsPage";
import MyNavbar from "./components/MyNavbar";
import FieldView from "./views/FieldView";
import AddField from "./views/Addfield";
import HeroPage from "./views/HeroPage";
import AboutPage from "./views/AboutPage";
import UserPage from "./views/UserPage";
import LoginPage from "./views/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HeroPage}></Route>
        <Route exact path="/about" component={AboutPage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <div>
          <MyNavbar />
          <UserPage exact path="/fields" component={FieldsPage}></UserPage>
          <UserPage exact path="/field/:id" component={FieldView}></UserPage>
          <UserPage exact path="/addField" component={AddField}></UserPage>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
