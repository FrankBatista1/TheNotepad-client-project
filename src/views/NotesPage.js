import Note from "../components/Note";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../stylesheets/Note.css";
import axios from "axios";
import LogoutButton from "../components/LogoutButton";

const apiUrl = process.env.REACT_APP_API_URL;
const authToken = process.env.REACT_APP_AUTH_TOKEN_NAME;

const NotesPage = ({ history }) => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!localStorage.getItem(authToken)) {
      history.push("/login");
    }
    fetchPrivateData();
    // getFields();
  }, []);

  // checkIfAuth()

  const fetchPrivateData = async () => {
    const token = localStorage.getItem(authToken);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    try {
      const uid = localStorage.getItem("uid");
      const { data } = await axios.get(`${apiUrl}/notes/note/user/${uid}`, config);
      setNotes(data);
    } catch (error) {
      // localStorage.removeItem("authToken");
      setError("You are not authorized please login");
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem(authToken);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      iconColor: "#d10a0a",
      showCancelButton: true,
      confirmButtonColor: "#878787",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        const filtered = notes.filter((note) => note._id !== id);
        axios.delete(`${apiUrl}/notes/note/${id}`, config);
        setNotes(filtered);
        Swal.fire("Deleted!", "Your note has been deleted.", "success");
      }
    });
  };

  return (
    <div>
      {notes &&
        notes.map((note) => (
          <div className="noteAndDelete-container" key={note._id}>
            <Note props={note} />
            <img
              onClick={() => handleDelete(note._id)}
              className="deletebutton"
              src="https://www.freeiconspng.com/thumbs/x-png/red-x-png-4.png"
              alt="x"
            ></img>
          </div>
        ))}
        <LogoutButton history={history}></LogoutButton>
    </div>
  );
};

export default NotesPage;
