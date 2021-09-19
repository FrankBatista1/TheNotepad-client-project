import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FieldsPage from "./views/FieldsPage";
import MyNavbar from "./components/MyNavbar";
import FieldView from "./views/FieldView";
import AddField from "./views/Addfield";
import FormPage from "./views/FormPage";
import LandingPage from "./views/LandingPage";
import AboutPage from "./views/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/about" component={AboutPage}></Route>
        <Route exact path="/login" component={FormPage}></Route>
        <div>
          <MyNavbar />
          <Route exact path="/fields" component={FieldsPage}></Route>
          <Route exact path="/field/:id" component={FieldView}></Route>
          <Route exact path="/addField" component={AddField}></Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
