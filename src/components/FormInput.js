import React from 'react'

import '../stylesheets/Form.css'


const FormInput = (props) => {
  return (
    <div>
      <div className="row">
      <input type={props.type} placeholder={props.placeholder}/>
    </div> 
    </div>
  )
}

export default FormInput
