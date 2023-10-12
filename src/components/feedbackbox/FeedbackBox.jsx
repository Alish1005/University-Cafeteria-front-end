import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./feedbackbox.css"
let bg_main="bg-light";
let bg_primary="bg-light";
let bg_secondary="bg-primary";
let text_primary="text-secondary";
let text_secondary="text-primary";
let btn_primary="btn-outline-secondary";
let btn_secondary="btn-outline-primary";

function FeedbackBox(props) {
    let es=5-props.rate

    return ( 
                  <div className= {`feedbackbox col-lg-3 col-xs-11 col-sm-10 col-md-5 shadow border  rounded m-md-4 m-lg-4 mx-sm-3 my-sm-3 p-0 ${bg_main}`}>
         <div>
           <div className={`d-flex justify-content-between pt-3 px-3 ${text_secondary}`}>
               <h5>{props.name} rate {props.item}</h5>
               {props.disableMoreIcon!=true &&
            <div class="dropdown">
                    <div class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <MoreVertIcon className="icon"/>
                    </div>
                    <ul class={`dropdown-menu bg-secondary`}>
                        <li><a class="dropdown-item text-primary mt-1" href="#">Edit</a></li>
                        <li><a class="dropdown-item text-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Disount</a></li>
                        <li><a class="dropdown-item bg-danger rounded-bottom" href="#">Delete</a></li>
                    </ul>
                </div>}
           </div>
           <p className={`timetxt ms-3 ${text_secondary}`} style={{textAlign:"left"}}>{props.time}</p>
           <div className={`boxRate ${text_secondary} m-3`} style={{height:"100%"}}>
            <div className="m-3">
            {Array.from({ length: props.rate }, () => <StarIcon/>)}
            {Array.from({ length: es}, () => <StarBorderIcon/>)}
            </div>
            <p>{props.note}</p>
             
           </div>
           <button className={`btn m-3  ${props.actionStyle!=null ? props.actionStyle : btn_secondary} fw-bold`}>{props.action}</button>
           </div>
           {props.disableMoreIcon!=true &&
<div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-primary fs-5" id="exampleModalLabel">Discount</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input className='col-5 p-1' type="number" min={0} max={100} placeholder='Discount' />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save</button>
      </div>
    </div>
  </div>
  </div>
  </div>
}   
       </div> 
     );
}

export default FeedbackBox;