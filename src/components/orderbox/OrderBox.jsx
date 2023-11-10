import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import React from 'react';
import "./orderbox.css"
import { format } from 'date-fns';

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
const {data}=props;
let t=0;
for (var i = 0; i < data.order_item.length; i++) {
    t=t+(data.order_item[i].quantity*data.order_item[i].item.price)
}
for (var i = 0; i < data.order_offer.length; i++) {
  t=t+(data.order_offer[i].quantity*data.order_offer[i].offer.price)
}

const deleteOrder=()=>{
  
}
const CompleteOrder=()=>{
  
}
const ChangeDiscount=()=>{
  
}

    return ( 
    <div className= {`orderbox col-lg-5 col-xs-11 col-sm-11 col-md-11 m-md-4 m-lg-4 mx-sm-0 my-sm-3 p-0 border shadow ${bg_main}`}>
      <div>
        <div className={`d-flex justify-content-between pt-3 px-3 ${text_secondary}`}>
            <h5># Order {data.id}</h5>
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
        <span>Ali</span><span>81095544</span><span>{format(new Date(data.order_time), 'hh:mm a')}</span>
          {/* <span>{data.name}</span><span>{data.phone}</span><span>{data.order_time}</span> */}
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
      data.order_item.map((oi, index)=>(
          <tr>
            <td>{oi.item.name}</td>
            <td>{oi.quantity}</td>
            <td>{oi.item.price}$</td>
            <td>{oi.quantity*oi.item.price}$</td>
            <td  className='text-danger'>{oi.note}</td>
          </tr>
      ))}
      {data.order_offer.map((oo, index)=>(
            <React.Fragment>
                    <tr className='trOrderOffer'>
                      <td>{`> `}{oo.offer.name}</td>
                      <td>{oo.quantity}</td>
                      <td>{oo.offer.price}$</td>
                      <td>{oo.quantity*oo.offer.price}$</td>
                      <td  className='text-danger'>{oo.note}</td>
                    </tr>
                    {oo.offer.offer_item.map((oi)=>(
                      <tr className='trOrderOfferItem'>
                      <td>{oi.item.name}</td>
                      <td>{oi.quantity}</td>
                      <td>{oi.item.price}$</td>
                      <td>{oi.quantity*oi.item.price}$</td>
                      <td  ></td>
                    </tr>
                    ))}
            </React.Fragment>
      ))}
          </table>
        </div>
        {/* <div className={`boxTotal d-flex justify-content-between ${text_secondary} m-3 mb-0`}>
          <p>Discount : {data.discount} %</p>     <p>Actual price : {t} $</p>
        </div> */}
        <div className={`boxTotal row ${text_secondary} m-3 `}>
          <div className='col-lg-8 col-xs-12 m-1'>        
            <div className={`boxTotal d-flex justify-content-between ${text_secondary} mx-1 gap-lg-2 `}>
            <p>Discount : {data.discount} %</p>     <p>Actual price : {t} $</p>
          </div>
          <h5 className='fw-bold'>Total Price : {(t*(1-data.discount/100)).toFixed(2)}$</h5>
          </div>
          <button className={`btn ${btn_secondary} col-lg-3 col-xs-12 fw-bold p-2 mx-1`}>{props.action}</button>
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