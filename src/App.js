import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FieldsPage from "./views/FieldsPage";
import MyNavbar from "./components/MyNavbar";
import FieldView from "./views/FieldView";
import AddField from "./views/Addfield";
import LandingPage from "./views/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/fields" component={FieldsPage}></Route>
        <Route exact path="/field/:id" component={FieldView}></Route>
        <Route exact path="/addField" component={AddField}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
