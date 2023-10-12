import ReorderIcon from '@mui/icons-material/Reorder';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BarChartIcon from '@mui/icons-material/BarChart';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SettingsIcon from '@mui/icons-material/Settings';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Link} from 'react-router-dom';
import './sidebar.css'
import { useState } from 'react';

function Sidebar() {
    const [menuShow,setMenuShow]=useState(false);
    return (
        <div className="Sidebar">
            <div className="items">
                <input type='checkbox' className='menuCheckBox' checked={menuShow} hidden/><ReorderIcon className='menuBtn text-secondary' onClick={()=>{
                    setMenuShow(menuShow=>!menuShow)
                }}/>
                <div className="title">Main</div>
                <div className="item">
                    <Link to="/" className='listItem' >
                        <BarChartIcon/>
                        { !menuShow ? <span className="listItemTitle">Dashbord</span> : <span className="listItemTitle" style={{display:"none"}}>Home</span>}
                    </Link>
                </div>
                <div className="item">
                    <Link to="/" className='listItem' >
                        <HomeIcon/>
                        { !menuShow ? <span className="listItemTitle">Home</span> : <span className="listItemTitle" style={{display:"none"}}>Home</span>}
                    </Link>
                </div>
                <div className="item">
                    <Link to="/StaffMenu" className='listItem'  data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <RestaurantMenuIcon/>
                        { !menuShow ? <span className="listItemTitle">Menu</span> : <span className="listItemTitle" style={{display:"none"}}>Menu</span>}
                    </Link>
                </div>
                <div className="title">Lists</div>
                <div className="item">
                    <Link to="/itemManagment" className='listItem' >
                        <FastfoodIcon />
                        { !menuShow ? <span className="listItemTitle">Item Managment</span> : <span className="listItemTitle" style={{display:"none"}}>Staff Managment</span>}
                    </Link>
                </div>
                <div className="item">
                    <Link to="/StaffList" className='listItem' >
                        <EngineeringIcon />
                        { !menuShow ? <span className="listItemTitle">Staff Managment</span> : <span className="listItemTitle" style={{display:"none"}}>Staff Managment</span>}
                    </Link>
                </div>
                <div className="item">
                    <Link to="/CustomerList" className='listItem' >
                        <ManageAccountsIcon />
                        { !menuShow ? <span className="listItemTitle">Customer Managment</span> : <span className="listItemTitle" style={{display:"none"}}>Customer Managment</span>}
                    </Link>
                </div>
                <div className="item">
                    <Link to="/OrdersList" className='listItem' >
                        <ShoppingCartIcon/>
                        { !menuShow ? <span className="listItemTitle">Order Managment</span> : <span className="listItemTitle" style={{display:"none"}}>Order Managment</span>}
                    </Link>
                </div>
                <div className="item">
                    <Link to="/OfferList" className='listItem' >
                        <LocalOfferIcon/>
                        { !menuShow ? <span className="listItemTitle">Offer Managment</span> : <span className="listItemTitle" style={{display:"none"}}>Offer Managment</span>}
                    </Link>
                </div>
                <div className="title">General</div>
                <div className="item">
                    <Link to="/FeedBack" className='listItem' >
                        <FeedbackIcon/>
                        { !menuShow ? <span className="listItemTitle">Feedbacks</span> : <span className="listItemTitle" style={{display:"none"}}>Feedbacks</span> }
                    </Link>
                </div>
                <div className="item">
                    <Link to="/Settings" className='listItem' >
                        <SettingsIcon/>
                        { !menuShow ? <span className="listItemTitle">Settings</span> : <span className="listItemTitle" style={{display:"none"}}>Settings</span>}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;