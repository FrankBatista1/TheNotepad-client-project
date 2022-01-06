import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../services/tools";
import React from "react";
import { useEffect, useState, useRef } from "react";
import LogoutButton from "../components/LogoutButton";
import "../stylesheets/Editor.css";
import Swal from "sweetalert2";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const FieldView = ({ match }) => {
  const [field, setField] = useState({});
  const { id } = match.params;

  useEffect(() => {
    const getSingleField = async () => {
      const token = localStorage.getItem("authToken");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      };

      try {
        const { data } = await axios.get(
          `${apiUrl}/fields/field/${id}`,
          config
        );
        setField(data);
      } catch (error) {
        localStorage.removeItem("authToken");
        console.log(error);
      }
    };
    getSingleField();
  }, [id]);

  const instanceRef = useRef(null);

  async function handleUpdate() {
    const token = localStorage.getItem("authToken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };
    await instanceRef.current
      .save()
      .then((val) => axios.put(`${apiUrl}/fields/field/${id}`, val, config));
    Swal.fire({
      icon: "success",
      title: "Saved",
      text: "Your changes have been saved",
      confirmButtonColor: "#878787",
    });
  }

  return (
    <div className="myeditor">
      <button className="buttons" onClick={() => handleUpdate()}>
        Save
      </button>
      <EditorJs
        enableReInitialize={true}
        data={field}
        instanceRef={(instance) => (instanceRef.current = instance)}
        tools={EDITOR_JS_TOOLS}
      />
      <LogoutButton history={history}></LogoutButton>
    </div>
  );
};

export default FieldView;
