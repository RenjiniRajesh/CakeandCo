import {Route,Routes} from "react-router-dom";
import NavBarComponent from "../NavBar";
import Signup from "../Signup";
import Login from "../Login";
import Hero from "../Hero";
import Members from "../Members";
import Books from "../Books";
const RoutePaths = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/books" element={<Books/>}></Route>
                <Route path="/members" element={<Members/>}></Route>
            </Routes>
        </>
    )
}

export default RoutePaths