//Editorjs tools file
import { EDITOR_JS_TOOLS } from "../services/tools";

//Libraries
import EditorJs from "react-editor-js";
import React from "react";
import Swal from 'sweetalert2'
import axios from "axios";
import LogoutButton from "../components/LogoutButton";

//Stylesheets
import "../stylesheets/FormPage.css"
import "../stylesheets/Editor.css";

const authToken = process.env.REACT_APP_AUTH_TOKEN_NAME;
const apiUrl = process.env.REACT_APP_API_URL;

const AddField = ({history}) => {
  const instanceRef = React.useRef(null);

  async function handleSave() {
    const token = localStorage.getItem(authToken);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
      }
    }
    

    const val = await instanceRef.current.save()

    if(val.blocks[0]){
        await axios.post(`${apiUrl}/fields/field`, val, config).then( Swal.fire({
        icon: 'success',
        title: 'Added',
        text: 'Your field has been saved',
        confirmButtonColor: "#878787",
      }))
    } else{
      Swal.fire({
        icon: 'warning',
        iconColor: "#d10a0a",
        title: 'Please add text',
        text: "You can't add a blank document",
        confirmButtonColor: "#878787",
      })
    }
  }
  
  return (
    <div className="myeditor">
      <button className="buttons" onClick={handleSave}>Add Note</button>
      <EditorJs
        instanceRef={(instance) => (instanceRef.current = instance)}//setting the constant to the instance of the page
        tools={EDITOR_JS_TOOLS}
      ></EditorJs>
      <LogoutButton history={history}></LogoutButton>
    </div>
  );
};

export default AddField;
