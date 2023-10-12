import './footer.css'
import FeedbackIcon from '@mui/icons-material/Feedback';
function Footer(props) {
    return (
        <div className="footer">
            {props.IsUser ?
            <button type="button" className='btn-footer-feedback text-primary' data-bs-toggle="modal" data-bs-target="#FeedbackModel"><FeedbackIcon/>Feedback</button>
            :
            <span>MU Cafeteria</span>
        }
            <span>&copy; Copyright 2023-2024</span>
            <span>Ali sherry - Ali Hamade</span>

        </div>
    );
}

export default Footer;