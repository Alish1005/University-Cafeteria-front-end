import MoreVertIcon from '@mui/icons-material/MoreVert';


let bg_main="bg-light";
let bg_primary="bg-light";
let bg_secondary="bg-primary";
let text_primary="text-secondary";
let text_secondary="text-primary";
let btn_primary="btn-outline-secondary";
let btn_secondary="btn-outline-primary";
let table_primary="table-secondary";
let table_secondary="table-dark";

function OfferBox(props) {

       return ( 
       <div className= {`col-lg-5 col-xs-11 col-sm-11 col-md-11 border shadow rounded m-md-4 m-lg-4 mx-sm-0 my-sm-3 p-0 ${bg_main}`}>
         <div>
           <div className={`d-flex justify-content-between pt-3 px-3 ${text_secondary}`}>
               <h5># Offer {props.data.id}</h5>
               {props.disableMoreIcon!=true &&
            <div class="dropdown">
                    <div class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <MoreVertIcon className="icon"/>
                    </div>
                    <ul class={`dropdown-menu bg-secondary`}>
                        <li><a class="dropdown-item text-primary mt-1" href="#">Edit</a></li>
                        <li><a class="dropdown-item text-primary" data-bs-toggle="modal" data-bs-target="#OfferPop" href="#">Disount</a></li>
                        <li><a class="dropdown-item bg-danger rounded-bottom" href="#">Delete</a></li>
                    </ul>
                </div>
}
           </div>
           <div className="boxItem">
             <table className={`table pt-3 my-2 ${table_primary} ${text_secondary} table-hover table-striped-gray`}>
               <thead>
                 <th>Item name</th>
                 <th>Quantity</th>
                 <th>Price</th>
                 <th>Total</th>
               </thead>
   
               {
         props.data.items.map(item=>(
             <tr>
               <td>{item.name}</td>
               <td>{item.quantity}</td>
               <td>{item.price}$</td>
               <td>{item.totalPrice}$</td>
             </tr>
         ))
   }
             </table>
           </div>
           <div className={`boxTotal d-flex justify-content-between ${text_secondary} m-3`}>
             <h5 className='fw-bold'>Total Price : <s className="fs-5 text-danger">{props.data.totalPrice}$</s> ➡ {props.data.priceAfterOffer}$</h5><button className={`btn ${props.actionStyle!=null ? props.actionStyle : btn_secondary} fw-bold`}>{props.action}</button>
           </div>
           </div>
           {props.disableMoreIcon!=true &&
<div>
<div class="modal fade" id="OfferPop" tabindex="-1" aria-labelledby="OfferPopLabel" aria-hidden="true">
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
       </div> );
}

export default OfferBox;