import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart ,   FaHome, FaCalendarAlt} from 'react-icons/fa';
 



const Dasbord = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button "
        >
          Open drawer
        </label>



       
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  flex   bg-yellow-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a><NavLink to='/dasbord/home' ><FaHome></FaHome> User Name </NavLink></a>
          </li>
          <li>
            <a> <NavLink to='/dasbord/mycart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink> </a>
          </li>
          <li>
            <a><NavLink to='/enrol'> <FaCalendarAlt></FaCalendarAlt> Enrol now </NavLink></a>
          </li>
         
          <div className="flex flex-col w-full border-opacity-50">
   
  <div className="divider"></div>
  <li><NavLink to="/"> <FaHome></FaHome>Home  </NavLink></li>
  <li><NavLink to="/class"> <FaHome></FaHome> Our Class </NavLink></li>
  <li><NavLink to="/ins"> <FaHome></FaHome> Our instructor</NavLink></li>
  
   
</div>
         
        </ul>
        
      </div>
   
    </div>
  );
};

export default Dasbord;
