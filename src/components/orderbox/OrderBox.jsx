import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';
import React from 'react';
import "./orderbox.css"
import { format } from 'date-fns';
import { variables } from '../../pages/Variables';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
import { Link } from 'react-router-dom';

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
const toast = useToast()
const {data}=props;
let discount=0

let t=0;
for (var i = 0; i < data.order_item.length; i++) {
    t=t+(data.order_item[i].quantity*data.order_item[i].item.price)
}
for (var i = 0; i < data.order_offer.length; i++) {
  t=t+(data.order_offer[i].quantity*data.order_offer[i].offer.price)
}
const ChangeStatus=(status)=>{
  axios.put(`${variables.API_URL}order/UpdateStatus/${data.id}/${status}`)
  .then((res) => {
    props.refresh()
    toast({
      title: `Order Changed to "${status}" Order`,
      position:'top-right',
      status: 'success',
      duration: 3000,
      isClosable: false,
    })
  }).catch((error)=>(
    toast({
      title: "Something went wrong!",
      position:'top-right',
      status: 'error',
      duration: 3000,
      isClosable: false,
    })
  ))
}
const DeleteOrder=(id)=>{
  axios.delete(`${variables.API_URL}order/${id}`)
  .then((res) => {
    props.refresh()
    toast({
      title: "Order Deleted Successfully !",
      position:'top-right',
      status: 'success',
      duration: 3000,
      isClosable: false,
    })
  }).catch((error)=>(
    toast({
      title: "Something went wrong!",
      position:'top-right',
      status: 'error',
      duration: 3000,
      isClosable: false,
    })
  ))
}
const ChangeDiscount=()=>{
  if(discount<0 || discount>100){
    toast({
      title: "Discount can't be less than 0 or greater than 100!",
      position:'top-right',
      status: 'error',
      duration: 3000,
      isClosable: false,
    })
    return
  }
  axios.put(`${variables.API_URL}order/UpdateDiscount/${data.id}/${discount}`)
  .then((res) => {
    props.refresh();
    toast({
      title: "Order Discount Changed Successfully",
      position:'top-right',
      status: 'success',
      duration: 3000,
      isClosable: false,
    })
  }).catch((error)=>(
    toast({
      title: "Something went wrong!",
      position:'top-right',
      status: 'error',
      duration: 3000,
      isClosable: false,
    })
  ))
}
const Reorder=()=>{
  let d=data;
  d.order_item.order=null;
  d.order_item.order=null;
  d.order_item.map((i)=>{
    i.order=null;
    i.item=null;
  })
  d.order_offer.map((i)=>{
    i.order=null;
    i.offer=null;
  })
  const order={
    "id":0,
    "status":variables.order_uncomplete,
    "discount":0,
    "del_Room":data.Del_Room,
    "order_item":d.order_item,
    "order_offer":d.order_offer,
    "TotalPrice":t
  }
  axios.post(`${variables.API_URL}order`,order)
  .then((res) => {
    props.refresh();
    toast({
      title: "Order has been reordered Successfully",
      position:'top-right',
      status: 'success',
      duration: 3000,
      isClosable: false,
    })
  }).catch((error)=>(
    toast({
      title: "Something went wrong!",
      position:'top-right',
      status: 'error',
      duration: 3000,
      isClosable: false,
    })
  ))
}
    return ( 
    <div className= {`orderbox ${props.action==variables.order_cancelled && "canceledOrder"} col-lg-5 col-xs-11 col-sm-11 col-md-11 m-md-4 m-lg-4 mx-sm-0 my-sm-3 p-0 border shadow ${bg_main}`}>
      <div className='align-i'>
        <div className={`d-flex justify-content-between pt-3 px-3 ${text_secondary}`}>
            <h5># Order {data.id}</h5>
            {data.Del_Room!="0000" && <h5><strong>{data.Del_Room}</strong></h5>}
            {props.disableMoreIcon!=true &&
            <div class="dropdown">
                    <div class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <MoreVertIcon className="icon"/>
                    </div>
                    <ul class={`dropdown-menu bg-secondary`}>
                        <li><Link to="/StaffMenu"  onClick={()=>{props.setOrderId(data.id)}}  class="dropdown-item text-primary"  >Edit</Link></li>
                        <li><Link class="dropdown-item text-primary" data-bs-toggle="modal" data-bs-target={`#OrderBoxDiscount${data.id}`} href="#">Disount</Link></li>
                        <li><Link onClick={()=>DeleteOrder(data.id)} class="dropdown-item bg-danger">Delete</Link></li>
                        <li><Link onClick={()=>ChangeStatus(variables.order_cancelled)} class="dropdown-item bg-danger rounded-bottom">Cancel</Link></li>
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
                      <td rowSpan={oo.offer.offer_item.length+1} className='tdOrderOffer text-danger'>{oo.note}</td>
                    </tr>
                    {oo.offer.offer_item.map((oi)=>(
                      <tr className='trOrderOfferItem'>
                      <td>{oi.item.name}</td>
                      <td>{oi.quantity}</td>
                      <td>{oi.item.price}$</td>
                      <td>{oi.quantity*oi.item.price}$</td>
                    </tr>
                    ))}
            </React.Fragment>
      ))}
          </table>
        </div>
        {/* <div className={`boxTotal d-flex justify-content-between ${text_secondary} m-3 mb-0`}>
          <p>Discount : {data.discount} %</p>     <p>Actual price : {t} $</p>
        </div> */}
        <div className={`boxTotal row ${text_secondary} m-3 fg `}>
          <div className='col-lg-8  col-xs-12 m-1'>        
            <div className={`boxTotal d-flex justify-content-between ${text_secondary} mx-1 gap-lg-2 `}>
            <p>Discount : {data.discount} %</p>     <p>Actual price : {t} $</p>
          </div>
          <h5 className='fw-bold'>Total Price : {(t*(1-data.discount/100)).toFixed(2)}$</h5>
          </div>
          {props.action==variables.order_uncomplete ?
          <button onClick={()=>ChangeStatus(variables.order_completed)} className={`btn ${btn_secondary} col-lg-3 col-xs-12 fw-bold p-2 mx-1`}>Complete</button>
        : props.action==variables.order_completed &&
        <button onClick={()=>ChangeStatus(variables.order_delivered)} className={`btn ${btn_secondary} col-lg-3 col-xs-12 fw-bold p-2 mx-1`}>Delivered</button>
        }
        {props.action==variables.order_cancelled && 
                <button onClick={()=>ChangeStatus(variables.order_uncomplete)} className={`btn ${btn_secondary} col-lg-3 col-xs-12 fw-bold p-2 mx-1`}>Reorder</button> || props.action==variables.order_delivered && 
                <button  onClick={()=>Reorder()} className={`btn ${btn_secondary} col-lg-3 col-xs-12 fw-bold p-2 mx-1`}>Reorder</button>}
        </div>
        </div>
{props.disableMoreIcon!=true &&
<div>
<div class="modal fade" id={`OrderBoxDiscount${data.id}`} tabindex="-1" aria-labelledby="OrderBoxDiscountLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-primary fs-5" id="OrderBoxDiscountLabel">Discount</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input className='col-5 p-1' onChange={(e)=>discount=e.target.value}  type="number" min={0} max={100} placeholder='Discount' />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={()=>ChangeDiscount()} type="button" class="btn btn-primary" data-bs-dismiss="modal">Save</button>
      </div>
    </div>
  </div>
  </div>
  </div>
}
    </div> );
}

export default OrderBox;