import Class from "../Clesses/Class";
import About from "./About";
import ClassProcess from "./ClassProcess";
import Exprence from "./Exprence";

  
const Home = () => {
   
    return (
        <div>
            <Exprence></Exprence>
            <ClassProcess></ClassProcess>
            <About></About>
            <Class></Class>
           
        </div>
    );
};

export default Home;