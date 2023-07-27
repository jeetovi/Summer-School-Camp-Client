import { Link } from "react-router-dom";

const InstroctorCard = ({teacher}) => {
  const { instructor,email, imege, phone} = teacher;

  return (
    <div>
      <div className="card w-76 h-96    bg-green-100 border-blue-600 shadow-xl">
        <figure className="mt-2  rounded-xl">
          <img src={imege} className=" h-56 rounded-2xl w-56" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="  rounded-2xl  font-bold   px-3 text-lg
      bg-white">{instructor}</h2>
          <h3>{email}</h3>
          {/* products ratting  */}
          {/* <span className="flex items-center mt-1">
                <img className="opacity-50 w-20 ml-5"   alt="" />
                <span className="text-xs ml-2 to-gray-500">20k reviews</span>
              </span> */}

          <p>
            Price:{" "}
            <span
              
            >
              {phone} {" "}
            </span>{" "}
          </p>

 {/* The button to open modal */}
<a href="#my_modal_8" className="btn  bg-green-300">view Teachers Detiels</a>
{/* Put this part before </body> tag */}
<div className="modal" id="my_modal_8">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello I'm Mr. {instructor}!</h3>
    <p className="py-4">Art teachers instruct students how to produce, appreciate, and understand the fine arts. Like teachers in other fields, they develop teaching outlines and lesson plans, give lectures, facilitate discussions and activities, keep class attendance records, assign homework, and evaluate student progress.</p>
    <div className="modal-action">
     <a href="#" className="btn">Close!</a>
    </div>
  </div>
</div>
        </div>
      </div>
      
    </div>
  );
};

export default InstroctorCard;
