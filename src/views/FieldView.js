import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../services/tools";
import React from "react";
import { getSingleFieldFromApi } from "../services/fieldservices";
import { useEffect, useState, useRef } from "react";
import "../stylesheets/Editor.css";
import { updateFieldtoApi } from "../services/fieldservices";
import '../stylesheets/Button.css'

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
  
  console.log('field outside', field)
  
  
  const instanceRef = useRef(null);

  async function handleUpdate() {
    await instanceRef.current.save().then(val => updateFieldtoApi(val, match.params.id))
    alert('Saved')
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
