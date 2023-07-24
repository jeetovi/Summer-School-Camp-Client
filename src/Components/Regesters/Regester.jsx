import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../PrivetRouter/AuthPorvidets";

 

const Regester = () => {
    const {user,createUser} = useContext(AuthContex)
    console.log(user,)
    const handleregester = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log(name,email, password);

        createUser(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
          })
          .catch((error) => {
            console.log(error)
            
            // ..
          });
        
      };
    
      return (
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Please Rehester  now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. </p>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleregester} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
    
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Regester</button>
                  </div>
                </form>
    
                <Link to="/login">
                  <button className="btn bg-orange-400 btn-active btn-link">
                     Go to login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Regester;