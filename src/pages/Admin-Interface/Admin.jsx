import { Route, BrowserRouter as Router , Routes } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import '../../style/global.css';
import '../../style/bootstrap.css'
import Footer from "../../components/footer/Footer";
//import Home from "./Home/Home";
import Dashboard from "./Dashboard/dashboard";

function Admin() {
    return ( 
        <div className="Admin">
            <Router>
            <div className="main">
                <Navbar/>
                <div className="containers">
                    <div className="menuContainer">
                        <Sidebar/>
                    </div>
                    <div className="contentContainer">
                            <Routes>
                                <Route path='/' element={<Dashboard/>}/>
                            </Routes>
                    </div>
                </div> 
            </div>
            </Router>
            <Footer/>
        </div>
     );
}

export default Admin;