// import Card from "../components/Card";
// import { useState, useEffect } from "react";
// import { getFieldsFromApi } from "../services/fieldservices";
// import { deleteFieldFromApi } from "../services/fieldservices";
// import Swal from "sweetalert2";
// import "../stylesheets/Deleteimage.css";

// const FieldsPage = () => {
//   const [fields, setFields] = useState([]);

//   useEffect(() => {
//     getFields();
//   }, []);

//   const getFields = async () => {
//     try {
//       const response = await getFieldsFromApi();
//       console.log(response);
//       setFields(response.data);
//     } catch (error) {
//       console.log("Server not working");
//     }
//   };

//   const handleDelete = async (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       iconColor: "#d10a0a",
//       showCancelButton: true,
//       confirmButtonColor: "#878787",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         const filtered = fields
//           .filter((field) => field._id !== id)
//           deleteFieldFromApi(id)
//           setFields(filtered)
//           Swal.fire("Deleted!", "Your field has been deleted.", "success");
//       }
//     });
//   };

//   return (
//     <div style={{ marginTop: "50px", marginBottom: "50px" }}>
//       {fields &&
//         fields.map((field) => (
//           <div key={field._id}>
//             <Card props={field} />
//             <img
//               onClick={(event) => handleDelete(field._id)}
//               className="deletebutton"
//               src="https://www.freeiconspng.com/thumbs/x-png/red-x-png-4.png"
//               alt="x"
//             ></img>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default FieldsPage;
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { getFieldsFromApi } from "../services/fieldservices";
import { deleteFieldFromApi } from "../services/fieldservices";
import Swal from "sweetalert2";
import "../stylesheets/Deleteimage.css";

const FieldsPage = ({history}) => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    if(!localStorage.getItem('authToken')){
      history.push("/login")
    }
    const getFields = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`
        }
      }
      try {
        const response = await getFieldsFromApi();
        console.log(response);
        setFields(response.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };
    getFields();
  }, []);


  const handleDelete = async (id) => {
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
        const filtered = fields
          .filter((field) => field._id !== id)
          deleteFieldFromApi(id)
          setFields(filtered)
          Swal.fire("Deleted!", "Your field has been deleted.", "success");
      }
    });
  };
  const logoutHandler = () => {
    localStorage.removeItem('authToken')
    history.push('/');
  }

  return (
  
    <div style={{ marginTop: "50px", marginBottom: "50px" }}>
      {fields &&
        fields.map((field) => (
          <div key={field._id}>
            <Card props={field} />
            <img
              onClick={(event) => handleDelete(field._id)}
              className="deletebutton"
              src="https://www.freeiconspng.com/thumbs/x-png/red-x-png-4.png"
              alt="x"
            ></img>
          </div>
        ))}
        <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default FieldsPage;

