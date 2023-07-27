 import  img1 from '../../assets/home/50001.png'
 import img2 from '../../assets/home/class.png'
 import img3 from '../../assets/home/class2.png'

const ClassProcess = () => {
    return (
                  <div className="mt-4 py-6 mb-4">
        <div className="text-center">
          <h3 className="text-1xl font-bold text-gray-950">
             ---------Our Process--------</h3>
          <h2 className="text-3xl font-bold text-orange-500">How We Works</h2>
          <p className="mt-2 mb-3">
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cum
            reprehenderit cumque maxime itaque dolorum totam 
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div >
                     <img className='   py-4 w-60 ml-14 ' src={img1} alt="" />
                    <h1 className="text-2xl font-bold ">Choose Your Class</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quisquam cupiditate ab quia consequatur  
                    </p>
                   
                </div>
                <div>
                    <img src={img2} className='   py-4 w-60 ml-14 ' alt="" />
                    <h1  className="text-2xl font-bold ">Join Our Class</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quisquam cupiditate ab quia consequatur  
                    </p>
                </div>
                <div >
                    <img className='   py-4 w-60 ml-14 ' src={img3} alt="" />
                   <h1 className="text-2xl font-bold ">Enjoy Your Painting</h1>
                   <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore quisquam cupiditate ab quia consequatur  
                    </p>
                </div>

             </div> 
             </div>
            
        </div>
    );
};

export default ClassProcess;