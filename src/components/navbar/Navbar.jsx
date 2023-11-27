import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from './logo-round.png';
import {Link} from 'react-router-dom';

function Navbar(props) {
    let secondary="secondary";
    if(props.theme=="primary"){
        secondary="secondary";
    }else{
        secondary="primary";
    }
    return ( 
        <div className={`navbar bg-${props.theme} text-${secondary} position-fixed top-0`}>
            <div className="logo">
               <img src={logo} style={{width:"30px",height:"30px",margin:'0'}}/> <span><strong>MU Cafeteria</strong></span>
            </div>
            <div className="icons">
                <div class="dropdown">
                    <div class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <ExpandMoreIcon className="icon"/>
                    </div>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                
                <div className="notification">
                    <span className="notificationCount">21</span>
                    <NotificationsIcon className="notificationIcon"/>
                </div>
                <div class="dropdown me-5">
                    <div class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="user">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span>Ali Sherry</span>
                </div>
                    </div>
                    <ul class="dropdown-menu bg-secondary" style={{fontSize:"13px"}}>
                        <li><Link to="/Profile" class="dropdown-item mt-1">Profile</Link></li>
                        <li><Link to="/MyOrders" class="dropdown-item" >My Orders</Link></li>
                        <li><Link  to="/ChangePassword"  class="dropdown-item" >Change Password</Link></li>
                        <li><Link to="/Login" class="dropdown-item bg-danger rounded-bottom" href="#">Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Navbar;