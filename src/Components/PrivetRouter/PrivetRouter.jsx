import { useContext } from "react";
import { AuthContex } from "./AuthPorvidets";
import { Navigate } from "react-router-dom";

 

const PrivetRouter = ({children}) => {
    const {user,loding}  = useContext(AuthContex)
    if (loding ) {
return  <progress className="progress w-80"></progress>

    }

    if(user) {
        return children;
        }
 return <Navigate  to='/login' replace={true}></Navigate>;
     
    
};

export default PrivetRouter;