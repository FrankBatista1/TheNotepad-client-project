import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../services/tools";
import React from "react";
import {postFieldToApi} from '../services/fieldservices'

import '../stylesheets/Button.css'
import "../stylesheets/Editor.css";



const AddField = () => {
  const instanceRef = React.useRef(null);// Creating an ref constant

  async function handleSave() {
    const val = await instanceRef.current.save()
    if(val.blocks[0]){
      await postFieldToApi(val).then('Saved')
    } else{
      alert('Please add text')
    }
  }
  
  return (
    <div className="myeditor">
      <button className="buttons" onClick={handleSave}>Save</button>
      <EditorJs
        instanceRef={(instance) => (instanceRef.current = instance)}//setting the constant to the instance of the page
        tools={EDITOR_JS_TOOLS}
      ></EditorJs>
    </div>
  );
};

export default AddField;
