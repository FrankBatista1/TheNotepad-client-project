import Note from "../components/Note";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../stylesheets/Note.css";
import axios from "axios";
import LogoutButton from "../components/LogoutButton";

const apiUrl = process.env.REACT_APP_API_URL;
const authToken = process.env.REACT_APP_AUTH_TOKEN_NAME;

const NotesPage = ({ history }) => {
  const [fields, setFields] = useState([]);
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
    console.log(token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };

    try {
      const { data } = await axios.get(`${apiUrl}/fields`, config);
      setFields(data);
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
        Authorization: `Bearer ${token}`,
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
        const filtered = fields.filter((field) => field._id !== id);
        axios.delete(`${apiUrl}/fields/field/${id}`, config);
        setFields(filtered);
        Swal.fire("Deleted!", "Your field has been deleted.", "success");
      }
    });
  };

  return (
    <div>
      {fields &&
        fields.map((field) => (
          <div className="noteAndDelete-container" key={field._id}>
            <Note props={field} />
            <img
              onClick={() => handleDelete(field._id)}
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
