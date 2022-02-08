import { Link } from "react-router-dom";
import "../stylesheets/Note.css";

const Note = ({props: note}) => {
  

  return (
    <>
      <div className="note-container">
        <Link to={`/note/${note._id}`} className="note-link">
            <h5 className="note">{note.blocks[0].data.text}</h5>
        </Link>
      </div>
    </>
  );
};

export default Note;
