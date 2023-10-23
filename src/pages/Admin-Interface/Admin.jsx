import { Route, BrowserRouter as Router , Routes } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import '../../style/global.css';
import '../../style/bootstrap.css'
import Footer from "../../components/footer/Footer";
import ItemManagments from "./itemManagments/ItemManagments";
import StaffList from "./StaffList/StaffList";
import CustomerList from "./CustomerList/CustomerList";
import OrderList from "./OrderList/OrderList";
import OfferList from "./OfferList/OfferList";
import StaffMenu from "./StaffMenu/StaffMenu";
import Feedback from "./FeedBack/FeedBack";
import ChangePassword from "../User-Interface/changePass/ChangePass";
//import Home from "./Home/Home";
import Dashboard from "./Dashboard/dashboard";
import AdminSettings from '../../pages/Admin-Interface/AdminSettings/AdminSettings';
import AddCustomer from "./AddCustomer/AddCustomer";
import AddStaff from "./addStaff/AddStaff";
import AddItems from "./addItems/AddItems";
import EditItems from "./editItems/EditItems";
import { useState } from "react";



function Admin() {
    const [EditItemId,setEditItemId]=useState(-1);
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
                                <Route path='/StaffMenu' element={<StaffMenu/>}/>
                                <Route path='/FeedBack' element={<Feedback/>}/>
                                <Route path='/Settings' element={<AdminSettings/>}/>
                                <Route path="/ChangePassword" element={<ChangePassword/>} />
                                <Route path='/CustomerList/AddCustomer' element={<AddCustomer/>}/>
                                <Route path='/StaffList/AddStaff' element={<AddStaff/>}/>
                                <Route path='/itemManagment/AddItem' element={<AddItems/>}/>
                                <Route path='/itemManagment/EditItem' element={<EditItems id={EditItemId}/>}/>


                            </Routes>
                    </div>
                </div> 
            </div>
            </Router>
            <Footer/>
            <div class="modal fade" id="exampleModal" tabindex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Customer Form</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body row d-flex justify-content-center">
                        <input type="text" className="col-6 p-2 m-2" placeholder="Customer Name" />
                        <input type="text" className="col-6 p-2 m-2" placeholder="Customer Number" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={()=>{window.location.pathname="/StaffMenu"}}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Admin;