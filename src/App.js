// Changing pages with no rerenders
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components imports
import MyNavbar from "./components/MyNavbar";
// Views imports
import NotesPage from "./views/NotesPage";
import NoteView from "./views/NoteView";
import AddNote from "./views/AddNote";
import HeroPage from "./views/HeroPage";
import AboutPage from "./views/AboutPage";
import UserPage from "./views/UserPage";
import LoginPage from "./views/LoginPage";
import SignupPage from "./views/SignupPage";
//General styles
import "./App.css"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HeroPage}></Route>
        <Route exact path="/about" component={AboutPage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/signup" component={SignupPage}></Route>
        <div>
          <MyNavbar />
          <UserPage exact path="/notes" component={NotesPage}></UserPage>
          <UserPage exact path="/notes/:id" component={NoteView}></UserPage>
          <UserPage exact path="/addNote" component={AddNote}></UserPage>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
