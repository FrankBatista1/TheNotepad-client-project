import Card from "../components/Card";
import { useState, useEffect } from "react";
import { getFieldsFromApi } from "../services/fieldservices";
import { deleteFieldFromApi} from "../services/fieldservices"
import '../stylesheets/Deleteimage.css'


 const FieldsPage = () => {
  const [fields, setFields] = useState([]);
 

  useEffect(() => {
    getFields();
  }, [])

  const getFields = async () => {
    try {
      const response = await getFieldsFromApi();
      console.log(response)
      setFields(response.data);
    } catch (error) {
      console.log("Server not working")
    }
  }

  const handleDelete = async (id) => {
    const response = window.confirm('Are you sure you want to delete it?')
    if(!response) return;
    const filtered = fields.filter((field) => {
      return field._id !== id
    })
    await deleteFieldFromApi(id);
    setFields(filtered)
  };


  return (
    
    <div style={{marginTop: '50px', marginBottom: '50px'}}>
       {fields && fields.map(field => (
          <div key={field._id}>
            <Card props={field}/><img onClick={(event) => handleDelete(field._id)} className='deletebutton' src="https://www.freeiconspng.com/thumbs/x-png/red-x-png-4.png" alt="x"></img>
          </div>
        ))}

    </div>
  );
};

export default FieldsPage;