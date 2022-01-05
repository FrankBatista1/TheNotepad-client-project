import { Link } from "react-router-dom";
import "../stylesheets/Note.css";

const Note = ({props: field}) => {
  

  return (
    <>
      <div className="note-container">
        <Link to={`/field/${field._id}`} className="note-link">
            <h5 className="note">{field.blocks[0].data.text}</h5>
        </Link>
      </div>
    </>
  );
};

export default Note;
