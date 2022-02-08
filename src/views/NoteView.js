import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../services/tools";
import React from "react";
import { useEffect, useState, useRef } from "react";
import LogoutButton from "../components/LogoutButton";
import "../stylesheets/Editor.css";
import Swal from "sweetalert2";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const authToken = process.env.REACT_APP_AUTH_TOKEN_NAME;

const NoteView = ({ match }) => {
  const [note, setNote] = useState({});
  const { id } = match.params;

  useEffect(() => {
    const getSingleNote = async () => {
      const token = localStorage.getItem(authToken);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
          Accept: "application/json",
        },
      };
      try {
        const { data } = await axios.get(
          `${apiUrl}/notes/note/${id}`,
          config
        );
        setNote(data);
      } catch (error) {
        localStorage.removeItem("authToken");
        console.log(error);
      }
    };
    getSingleNote();
  }, [id]);

  const instanceRef = useRef(null);

  async function handleUpdate() {
    const token = localStorage.getItem(authToken);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        Accept: "application/json",
      },
    };
    try {
    await instanceRef.current
      .save()
      .then((val) => axios.put(`${apiUrl}/notes/note/${id}`, val, config));
    Swal.fire({
      icon: "success",
      title: "Saved",
      text: "Your changes have been saved",
      confirmButtonColor: "#878787",
    });
  } catch {
    Swal.fire({
      icon: "success",
      title: "Error",
      text: "Your changes could not been saved",
      confirmButtonColor: "#878787",
    });
  }
  }

  return (
    <div className="myeditor">
      <button className="buttons" onClick={() => handleUpdate()}>
        Save
      </button>
      <EditorJs
        enableReInitialize={true}
        data={note}
        instanceRef={(instance) => (instanceRef.current = instance)}
        tools={EDITOR_JS_TOOLS}
      />
      <LogoutButton history={history}></LogoutButton>
    </div>
  );
};

export default NoteView;
