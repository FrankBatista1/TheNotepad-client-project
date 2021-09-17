import { Link } from "react-router-dom";

import "../stylesheets/Card.css";

const Card = ({props: field}) => {
  

  return (
    <>
      <div>
        <Link to={`/field/${field._id}`} className="card">
          <div className="card-body">
            <h5>{field.blocks[0].data.text}</h5>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
