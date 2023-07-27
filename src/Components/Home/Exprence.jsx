 import img from '../../assets/home/Teachers.jpg'

const Exprence = () => {
    return (
        
         <div className="mt-4 mb-4">
        <div className="text-center">
          <h3 className="text-1xl font-bold text-gray-950">
             ---------Teachers--------</h3>
          <h2 className="text-3xl font-bold text-orange-500">Our Teachers Experience</h2>
          <p className="mt-2 mb-3">
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cum
            reprehenderit cumque maxime itaque dolorum totam
             
          </p>
        </div >
            <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img}  className=" rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">
20 Years Of Experience In Art & Drawing School!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
 <p>Drawing<progress className="progress progress-error w-96" value="60" max="100"></progress>60%</p>
<p>Painting<progress className="progress progress-error w-96" value="80" max="100"></progress>80%
</p>
<p>Painting
<progress className="progress progress-error w-96" value="70" max="100"></progress>70%</p>
<p>DigitalArt<progress className="progress progress-error w-96" value="100" max="100"></progress>100%
</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Exprence;