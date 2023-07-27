import { useEffect, useState } from "react";
import InstroctorCard from "./InstroctorCard";
import Exprence from "../Home/Exprence";
import Tab from "../Home/Tab";

 

const Instroctor = () => {
    const [teachers, setTeachars] = useState([]);
    useEffect(() => {
        fetch("Teacher.json")
          .then((res) => res.json())
          .then((data) => setTeachars(data));
      }, []);
    return (
       
           <div className="mt-4 mb-4">
        <div className="text-center">
          <h3 className="text-1xl font-bold text-gray-950">
             ---------Our Instructor--------</h3>
          <h2 className="text-3xl font-bold text-orange-500">Meet With Expert Teacher</h2>
          <p className="mt-2 mb-3">
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cum
            reprehenderit cumque maxime itaque dolorum totam{teachers.length}
             </p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                teachers.map((teacher) => <InstroctorCard
                key={teacher.id}
                teacher={teacher}
                ></InstroctorCard> )
            }
         
        </div>
       <div className="py-4">
       <Exprence></Exprence>
       <Tab></Tab>
       </div>
      </div>
        
    );
};

export default Instroctor;