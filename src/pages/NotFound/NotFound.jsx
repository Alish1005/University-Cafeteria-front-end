import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import NFImage from "./NotFound.jpg"
import { useEffect } from 'react';
function NotFound() {
    useEffect(() => {
        //document.title = `Not Found`;
     }, []);
    return ( 
        <div className="text-danger w-bold position-relative" style={{height:"100vh",width:"100%",display:"flex",alignItems: "center",justifyContent: "center"}}>
            <img className='position-fixed' src={NFImage} style={{width:"60vh",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}/>
        </div>
     );
}

export default NotFound;