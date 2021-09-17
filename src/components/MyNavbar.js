import { Link } from "react-router-dom";

import '../stylesheets/MyNavbar.css'

const MyNavbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to='/' className="home">Home</Link>
          <Link to='/fields' className="notes">Notes</Link>
        </li>
        <li>
          <h1 className="title">THE NOTEPAD</h1>
        </li>
        <li>
          <Link to='/addField' className="addfields">Add Notes</Link>
        </li>
      </ul>
      
    </div>
  );
};


export default MyNavbar;
