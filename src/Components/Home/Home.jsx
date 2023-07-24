import { useContext } from "react";
import { AuthContex } from "../PrivetRouter/AuthPorvidets";

  
const Home = () => {
    const user = useContext(AuthContex);
    return (
        <div>
            <h1> This is a home sections {user && <span>{user.Display}</span>}</h1>
        </div>
    );
};

export default Home;