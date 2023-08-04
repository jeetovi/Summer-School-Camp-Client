import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../PrivetRouter/AuthPorvidets";

const Card = ({ clas }) => {
  const { name, instructor, id, available, price, location, button, image } =
    clas;
  const { user } = useContext(AuthContex);
  return (
    <div>
      <div className="card w-76   bg-slate-300 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} className="rounded-xl h-56 w-56" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <h3>{instructor}</h3>
          {/* products ratting  */}
          {/* <span className="flex items-center mt-1">
            <img className="opacity-50 w-20 ml-5"   alt="" />
            <span className="text-xs ml-2 to-gray-500">20k reviews</span>
          </span> */}

          <h4>Location: {location}</h4>
          <p>
            Price:{" "}
            <span
              className="text-xs ml-2 font-bold   py-1 px-3 text-lg
  bg-green-500"
            >
              {price} ${" "}
            </span>{" "}
          </p>
          <p> Available-Shet:{available} </p>

          <Link to="/enrol">
            <button className="btn h-1 btn-outline bg-orange-100">
              Enrol Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
