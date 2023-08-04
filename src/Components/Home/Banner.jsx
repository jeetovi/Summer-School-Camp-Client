import { Link } from "react-router-dom";
import img1 from "../../assets/home/img5.jpg";
import img2 from "../../assets/home/img6.jpg";
import img3 from "../../assets/home/img1.jpg";
import img4 from "../../assets/home/img2.jpg";
import img5 from "../../assets/home/img3.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />
          <div
            className="absolute flex items-center justify-between   transform -translate-y-1/2 left-0  
                  h-full  <button className='btn btn-primary'>Car po</button>
                    button-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] right-0 top-1/2"
          >
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <div className="text-white space-y-7   w-1/2">
              <h1 className="text-5xl font-bold  ">
                {" "}
                The Most Creative Art School That Can Develop Your Talent{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                minima tenetur incidunt porro vero accusamus ipsa pariatur
                Tempore!
              </p>
              <div>
                <Link to='/enrol'><button className="btn btn-primary mr-5 mt-3">Enrol Now</button></Link>
                <Link to='class'><button className="btn btn-outline btn-secondary">
                   All Classes
                </button></Link>
                
                
              </div>
            </div>

            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl" />
          <div
            className="absolute flex items-center justify-between   transform -translate-y-1/2 left-0  
                  h-full  <button className='btn btn-primary'>Car po</button>
                    button-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] right-0 top-1/2"
          >
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <div className="text-white space-y-7   w-1/2">
              <h1 className="text-5xl font-bold  ">
                {" "}
                The Most Creative Art School That Can Develop Your Talent{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                minima tenetur incidunt porro vero accusamus ipsa pariatur
                Tempore!
              </p>
              <div>
              <Link to='/enrol'><button className="btn btn-primary mr-5 mt-3">Enrol Now</button></Link>
                <Link to='class'><button className="btn btn-outline btn-secondary">
                   All Classes
                </button></Link>
              </div>
            </div>

            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full rounded-xl" />
          <div
            className="absolute flex items-center justify-between   transform -translate-y-1/2 left-0  
                  h-full  <button className='btn btn-primary'>Car po</button>
                    button-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] right-0 top-1/2"
          >
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <div className="text-white space-y-7   w-1/2">
              <h1 className="text-5xl font-bold  ">
                {" "}
                The Most Creative Art School That Can Develop Your Talent{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                minima tenetur incidunt porro vero accusamus ipsa pariatur
                Tempore!
              </p>
              <div>
              <Link to='/enrol'><button className="btn btn-primary mr-5 mt-3">Enrol Now</button></Link>
                <Link to='class'><button className="btn btn-outline btn-secondary">
                   All Classes
                </button></Link>
              </div>
            </div>

            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />{" "}
          <div
            className="absolute flex items-center justify-between   transform -translate-y-1/2 left-0  
                  h-full  <button className='btn btn-primary'>Car po</button>
                    button-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] right-0 top-1/2"
          >
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <div className="text-white space-y-7   w-1/2">
              <h1 className="text-5xl font-bold  ">
                {" "}
                The Most Creative Art School That Can Develop Your Talent{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                minima tenetur incidunt porro vero accusamus ipsa pariatur
                Tempore!
              </p>
              <div>
              <Link to='/enrol'><button className="btn btn-primary mr-5 mt-3">Enrol Now</button></Link>
                <Link to='class'><button className="btn btn-outline btn-secondary">
                   All Classes
                </button></Link>
              </div>
            </div>

            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />{" "}
          <div
            className="absolute flex items-center justify-between   transform -translate-y-1/2 left-0  
                  h-full  <button className='btn btn-primary'>Car po</button>
                    button-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] right-0 top-1/2"
          >
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <div className="text-white space-y-7   w-1/2">
              <h1 className="text-5xl font-bold  ">
                {" "}
                The Most Creative Art School That Can Develop Your Talent{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                minima tenetur incidunt porro vero accusamus ipsa pariatur
                Tempore!
              </p>
              <div>
              <Link to='/enrol'><button className="btn btn-primary mr-5 mt-3">Enrol Now</button></Link>
                <Link to='class'><button className="btn btn-outline btn-secondary">
                   All Classes
                </button></Link>
              </div>
            </div>

            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
