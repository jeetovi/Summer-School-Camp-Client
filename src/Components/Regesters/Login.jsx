import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../PrivetRouter/AuthPorvidets";

const Login = () => {
    const {SignIn, signInGoogle} = useContext(AuthContex)
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    SignIn(email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        form.reset();
        // ...
      })
      .catch((error) => {
        console.log(error)
        
        // ..
      });
  };

   const handleGoogle = () => {
    signInGoogle
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
   }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <Link to="/reg">
              <button className="btn bg-orange-400 btn-active btn-link">
                New to this wesite
              </button>
            </Link>
            <div className=" ml-14 mb-4">
            <button onClick={handleGoogle} className="btn mr-5 btn-wide font-bold  bg-amber-500">Sign with  <span className="text-xl text-indigo-700">Google</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
