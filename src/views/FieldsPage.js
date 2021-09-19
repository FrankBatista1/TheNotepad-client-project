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
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    iconColor: "#d10a0a",
    showCancelButton: true,
    confirmButtonColor: "#878787",
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it'
  }).then((result) => {
    
    if (result.isConfirmed) {
      const filtered = fields.filter((field) => {
        return field._id !== id
      }).then(deleteFieldFromApi(id).then(setFields(filtered)))
      
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      
    }
  })


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