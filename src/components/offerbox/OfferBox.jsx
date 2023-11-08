import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react'
import { variables } from '../../pages/Variables';
import { Link } from 'react-router-dom';

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
const toast = useToast()
const {data,disableMoreIcon,action,actionStyle,refresh, setOffer}=props;
let total=0;
data.offer_item.map(Offeritem=>{
  total=total+(Offeritem.quantity*Offeritem.item.price)
})
const onClickDelete=(id)=>{
//Save Offers on-menu
axios.delete(variables.API_URL+"Offer/"+id)
.then((res) => {
  toast({
    title: 'Offer Deleted Successfully !',
    /*description: "Fill all the information",*/
    position:'top-right',
    status: 'success',
    duration: 3000,
    isClosable: false,
  })
  refresh()
  }).catch((error)=>{
    toast({
      title: error.massege,
      position:'top-right',
      status: 'error',
      duration: 3000,
      isClosable: false,
    })
  })
}
const onClickStatus=(id)=>{
  //Save Offers on-menu
  let status=variables.onMenuValue;
  if (action=="Hide"){
    status=variables.hideValue;
  }
  axios.put(variables.API_URL+"Offer/UpdateStatus/"+id+"/"+status)
  .then((res) => {
    refresh()
    toast({
      title: `Offer Status is being ${status} Successfully !`,
      /*description: "Fill all the information",*/
      position:'top-right',
      status: 'success',
      duration: 3000,
      isClosable: false,
    })

    }).catch((error)=>{
      toast({
        title: `Something went wrong !`,
        position:'top-right',
        status: 'error',
        duration: 3000,
        isClosable: false,
      })
    })
  }
const onClickEdit=()=>{
  const d={"id":data.id,"name":data.name,"img":data.photo,"description":data.description,"price":data.price};
  setOffer(d);
}
       return ( 
       <div className= {`col-lg-5 col-xs-11 col-sm-11 col-md-11 border shadow rounded m-md-4 m-lg-4 mx-sm-0 my-sm-3 p-0 ${bg_main}`}>
         <div>
           <div className={`d-flex justify-content-between pt-3 px-3 ${text_secondary}`}>
               <h5># Offer {data.id}</h5>
               <h5>{data.name}</h5>
               {disableMoreIcon!=true &&
            <div class="dropdown">
                    <div class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <MoreVertIcon className="icon"/>
                    </div>
                    <ul class={`dropdown-menu bg-secondary`}>
                        <li><Link to="/OfferList/EditOffer" onClick={()=>onClickEdit()} class="dropdown-item text-primary mt-1" href="#">Edit</Link></li>
                        <li><a onClick={()=>onClickDelete(data.id)} class="dropdown-item bg-danger rounded-bottom" href="#">Delete</a></li>
                    </ul>
                </div>}
           </div>
           <div className="boxItem">
             <table className={`table pt-3 my-2 ${table_primary} ${text_secondary} table-hover table-striped-gray`}>
               <thead>
                 <th>Item name</th>
                 <th>Price</th>
                 <th>Quantity</th>
                 <th>Total</th>
               </thead>
   
               {
         data.offer_item.map(Offeritem=>(
             <tr>
               <td>{Offeritem.item.name}</td>
               <td>{Offeritem.item.price}$</td>
               <td>{Offeritem.quantity}</td>
               <td>{(Offeritem.quantity*Offeritem.item.price)}$</td>
             </tr>
         ))
   }
             </table>
           </div>
           <div className={`boxTotal d-flex justify-content-between ${text_secondary} m-3`}>
             <h5 className='fw-bold'>Total Price : <s className="fs-5 text-danger">{total}$</s> ➡ {data.price}$</h5>
             <button onClick={()=>onClickStatus(data.id)} className={`btn ${actionStyle!=null ? actionStyle : btn_secondary} fw-bold`}>{action}</button>
           </div>
           </div>
 
       </div> );
}

export default OfferBox;