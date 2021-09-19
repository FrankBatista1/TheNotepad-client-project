import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../services/tools";
import React from "react";
import { getSingleFieldFromApi } from "../services/fieldservices";
import { useEffect, useState, useRef } from "react";
import "../stylesheets/Editor.css";
import '../stylesheets/Button.css'
import { updateFieldtoApi } from "../services/fieldservices";
import Swal from 'sweetalert2'

const FieldView = ({ match }) => {
  const [field, setField] = useState({});
  const { id } = match.params;
  
  useEffect(() => {
    const getSingleField = async () => {
      const response = await getSingleFieldFromApi(id);
      console.log("resonse.data", response.data);
      setField(response.data);
      console.log('field',  field)
    };
    getSingleField();
  }, [id]);
  

  
  const instanceRef = useRef(null);

  async function handleUpdate() {
    await instanceRef.current.save().then(val => updateFieldtoApi(val, match.params.id))
    Swal.fire({
      icon: 'success',
      title: 'Saved',
      text: 'Your changes have been saved',
      confirmButtonColor: "#878787",
    })
  }
  
  

  return (
    <div className="myeditor">
    <button className="buttons" onClick={()=> handleUpdate()}>Save</button>
      <EditorJs
        enableReInitialize={true}
        data={field}
        instanceRef={(instance) => (instanceRef.current = instance)}
        tools={EDITOR_JS_TOOLS}
      />
    </div>
  );
};

export default FieldView;
