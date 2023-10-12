import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./orderbox.css"
let bg_main="bg-light";
let bg_primary="bg-light";
let bg_secondary="bg-primary";
let text_primary="text-light";
let text_secondary="text-black";
let btn_primary="btn-outline-secondary";
let btn_secondary="btn-outline-primary";
let table_primary="table-secondary";
let table_secondary="table-dark";
function OrderBox(props) {

    return ( 
    <div className= {`orderbox col-lg-5 col-xs-11 col-sm-11 col-md-11 m-md-4 m-lg-4 mx-sm-0 my-sm-3 p-0 border shadow ${bg_main}`}>
      <div>
        <div className={`d-flex justify-content-between pt-3 px-3 ${text_secondary}`}>
            <h5># Order {props.data.id}</h5>
            {props.disableMoreIcon!=true &&
            <div class="dropdown">
                    <div class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <MoreVertIcon className="icon"/>
                    </div>
                    <ul class={`dropdown-menu bg-secondary`}>
                        <li><a class="dropdown-item text-primary mt-1" href="#">Edit</a></li>
                        <li><a class="dropdown-item text-primary" data-bs-toggle="modal" data-bs-target="#OrderBoxDiscount" href="#">Disount</a></li>
                        <li><a class="dropdown-item bg-danger rounded-bottom" href="#">Delete</a></li>
                    </ul>
                </div>
          }
        </div>
        <div className={`boxOwner d-flex justify-content-between my-3 px-4 py-1 fw-bold ${bg_secondary} ${text_primary}`}>
          <span>{props.data.name}</span><span>{props.data.phone}</span><span>{props.data.time}</span>
        </div>
        <div className="boxItem my-4">
          <table className={`table pt-3 ${table_primary} ${text_secondary} table-hover table-striped-gray`}>
            <thead>
              <th>Item name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Notes</th>
            </thead>

            {
      props.data.items.map((item, index)=>(
          <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}$</td>
            <td>{item.total}$</td>
            <td  className='text-danger'>{item.note}</td>
          </tr>
      ))
}
          </table>
        </div>
        <div className={`boxTotal d-flex justify-content-between ${text_secondary} m-3`}>
          <h5 className='fw-bold'>Total Price : {props.data.total}$</h5><button className={`btn ${btn_secondary} fw-bold p-2 mx-1`}>{props.action}</button>
        </div>
        </div>
{props.disableMoreIcon!=true &&
<div>
<div class="modal fade" id="OrderBoxDiscount" tabindex="-1" aria-labelledby="OrderBoxDiscountLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-primary fs-5" id="OrderBoxDiscountLabel">Discount</h1>
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

export default OrderBox;