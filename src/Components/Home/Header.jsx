import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../PrivetRouter/AuthPorvidets";

const Header = () => {
  const {user , logOut} = useContext (AuthContex);
  const handleLogOUt  = () => {
    logOut()
    .then(() => {})
    .catch (error => console.error(error))
  }

  return (
    <div>
      <div className="navbar fixed z-10  bg-amber-300 bg-opacity-30 max-w-6xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-bold btn-outline shadow bg-base-100 rounded-box w-52"
            >
              <Link  className="btn btn-outline btn-ghost normal-case text-x2" to="/">
              Home
            </Link>
            <Link className="btn btn-ghost normal-case text-x2" to="/ins">
             Instroctor
            </Link>
            <Link className="btn btn-ghost normal-case text-x2" to="/class">
             Classes
            </Link>
            <Link className="btn btn-ghost normal-case text-x2" to="/login">
              Login
            </Link>
            <Link className="btn btn-ghost normal-case text-x2" to="/reg">
              Regester
            </Link>
              {/* ON Auth Change  */}
           {
            user ? <>
            <span className="mt-3 text-red-600 font-bold">{user.email}</span>
            <button  onClick={handleLogOUt} className="btn 
             mt-3  font-bold btn-xs"> SignOut</button>
            
            </> : <Link className="mt-3  font-bold" to='/login'> SignIn</Link>
           }
            </ul>
          </div>
         <Link className="">
         <a className="btn btn-ghost normal-case font-bold text-lime-400  text-4xl">SUMMER_SCHOOL</a>
         </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <Link  className="btn btn-ghost normal-case text-x2" to="/">
              Home
            </Link>
            <Link className="btn btn-ghost normal-case text-x2" to="/ins">
             Instroctor
            </Link>
            <Link className="btn btn-ghost normal-case text-x2" to="/class">
             Classes
            </Link>
           { user && <Link className="btn btn-ghost normal-case text-x2" to="/class">
             Dashbord
            </Link> }


            <Link className="btn btn-ghost normal-case text-x2" to="/login">
              Login
            </Link>
            <Link className="btn btn-ghost normal-case text-x2" to="/reg">
              Regester
            </Link>
           {/* ON Auth Change  */}
           {
            user ? <>
            <span className="mt-3 text-red-600 font-bold">{user.email}</span>
            <button  onClick={handleLogOUt} className="btn 
             mt-3  font-bold btn-xs"> SignOut</button>
            
            </> : <Link className="mt-3  font-bold" to='/login'> SignIn</Link>
           }
    

          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
