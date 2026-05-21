import {Route,Routes} from "react-router-dom";
import NavBarComponent from "../NavBar";
import Signup from "../Signup";
import Hero from "../Hero";
import Login from "../Login";
import AdminHome from "../admin/AdminHome"; 
import Viewcakes from "../admin/ViewCakes";



const RoutePaths = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
               
                
                {/* admin path */}

                <Route path="/adminhome" element={<AdminHome/>}/>
                 <Route path="/viewcakes" element={<Viewcakes/>}/>
            </Routes>
        </>
    )
}

export default RoutePaths