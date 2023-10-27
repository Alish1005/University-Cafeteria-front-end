import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "../../style/global.css";
import "../../style/bootstrap.css";
import Footer from "../../components/footer/Footer";
import ItemManagments from "./itemManagments/ItemManagments";
import StaffList from "./StaffList/StaffList";
import CustomerList from "./CustomerList/CustomerList";
import OrderList from "./OrderList/OrderList";
import OfferList from "./OfferList/OfferList";
import StaffMenu from "./StaffMenu/StaffMenu";
import Feedback from "./FeedBack/FeedBack";
import ChangePassword from "../User-Interface/changePass/ChangePass";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";
import AdminSettings from "../../pages/Admin-Interface/AdminSettings/AdminSettings";
import AddCustomer from "./AddCustomer/AddCustomer";
import AddStaff from "./addStaff/AddStaff";
import AddItems from "./addItems/AddItems";
import EditItems from "./editItems/EditItems";
import { useState } from "react";
import NotFound from "../NotFound/NotFound";

function Admin() {
    const [EditItemId,setEditItemId]=useState(-1);
    const [CustomerName,setCustomerName]=useState("");
    const [CustomerPhone,setCustomerPhone]=useState("");
    const OnClickCustomerOrder=()=>{
        
    }
    return ( 
        <div className="Admin">
            <Router>
            <div className="main">
                <Navbar theme="primary"/>
                <div className="containers">
                    <div className="menuContainer">
                        <Sidebar/>
                    </div>
                    <div className="contentContainer">
                            <Routes>
                                <Route path='/' element={<Dashboard/>}/>
                                <Route path='/itemManagment' element={<ItemManagments setEditItemId={setEditItemId}/>}/>
                                <Route path='/StaffList' element={<StaffList/>}/>
                                <Route path='/CustomerList' element={<CustomerList/>}/>
                                <Route path='/OrdersList' element={<OrderList/>}/>
                                <Route path='/OfferList' element={<OfferList/>}/>
                                <Route path='/StaffMenu' element={<StaffMenu CName={CustomerName} CPhone={CustomerPhone} />}/>
                                <Route path='/FeedBack' element={<Feedback/>}/>
                                <Route path='/Settings' element={<AdminSettings/>}/>
                                <Route path="/ChangePassword" element={<ChangePassword/>} />
                                <Route path='/CustomerList/AddCustomer' element={<AddCustomer/>}/>
                                <Route path='/StaffList/AddStaff' element={<AddStaff/>}/>
                                <Route path='/itemManagment/AddItem' element={<AddItems/>}/>
                                <Route path='/itemManagment/EditItem' element={<EditItems id={EditItemId}/>}/>
                                <Route path='/*' element={<NotFound/>}/>
                            </Routes>
                    </div>
                </div> 
            </div>
            
            <Footer/>
            <div class="modal fade" id="exampleModal" tabindex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Customer Form</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body row d-flex justify-content-center">
                        <input type="text" onChange={(e)=>setCustomerName(e.target.value)} className="col-6 p-2 m-2" placeholder="Customer Name" />
                        <input type="text" onChange={(e)=>setCustomerPhone(e.target.value)} className="col-6 p-2 m-2" placeholder="Customer Number" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        {/*<button type="button" class="btn btn-primary" onClick={()=>{window.location.pathname="/StaffMenu"}}>Save changes</button>*/}
                        {CustomerName==""||CustomerName==null||CustomerPhone==""||CustomerPhone==null ?
                        <button type="button" data-bs-dismiss="modal" class="btn btn-primary text-secondary" >Save changes</button>
                        :
                        <Link to="/StaffMenu" data-bs-dismiss="modal" class="btn btn-primary text-secondary" >Save changes</Link>
                        }
                    </div>
                    </div>
                </div>
            </div>
            </Router>
        </div>
     );
}

export default Admin;
