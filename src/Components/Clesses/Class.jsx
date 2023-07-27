import { useEffect, useState } from "react";
import Card from "./Card";

const Class = () => {
  const [clases, setClass] = useState([]);
  useEffect(() => {
    fetch("ClassData.json")
      .then((res) => res.json())
      .then((data) => setClass(data));
  }, []);
  return (
    <>
      <div className="mt-4 mb-4">
        <div className="text-center">
          <h3 className="text-1xl font-bold text-gray-950">
             ---------Our Class--------</h3>
          <h2 className="text-3xl font-bold text-orange-500">Choose The Best Class For You</h2>
          <p className="mt-2 mb-3">
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cum
            reprehenderit cumque maxime itaque dolorum totam
             
          </p>
        </div >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clases.map((clas) => (
            <Card key={clas.id} clas={clas}></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Class;
