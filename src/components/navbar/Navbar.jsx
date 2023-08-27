import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from './logo-round.png';
function Navbar() {
    return ( 
        <div className="navbar bg-primary position-fixed top-0">
            <div className="logo">
               <img src={logo} style={{width:"30px",height:"30px",margin:''}}/> <span>MU Cafeteria</span>
            </div>
            <div className="icons">
                <SearchIcon className="icon"/>
                <AppsIcon className="icon"/>
                
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
                <div className="user">
                    <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                    <span>Jane</span>
                </div>
                <SettingsIcon/>
            </div>
        </div>
     );
}

export default Navbar;