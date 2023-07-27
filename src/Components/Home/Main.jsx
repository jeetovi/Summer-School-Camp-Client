import { Outlet } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "../Footers/Footer";
 
 

 

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
      
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;