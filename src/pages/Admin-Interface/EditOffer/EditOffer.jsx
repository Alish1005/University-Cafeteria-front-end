import "./EditOffer.css"
import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { Link, resolvePath } from "react-router-dom";
import { variables } from "../../Variables";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import { useToast } from '@chakra-ui/react'
import PrintIcon from '@mui/icons-material/Print';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { format } from 'date-fns';


function EditOffer(props) {
  const toast = useToast()
  const url=variables.API_URL;
  const {Offer,setOffer,OfferItems,setOfferItems, setOfferTotal, OfferTotal}=props;
  //attrb.
  const [date,setDate]=useState("0");
    const [imgbase64,setImageBase64]=useState(""); //set encoded img
    const [name,setName]=useState("");
    const [description,setdescription]=useState("");
    const [price,setPrice]=useState("");
    const onChangeOffer=(key,value)=>{
      const data={id:Offer.id,"name":name,"img":imgbase64,"description":description,"price":price};
      data[key]=value;
      setOffer(data);
    }

    //Add Offer
    const EditOffer = () => {
      const offerItemsList=[]
      OfferItems.map(i=>(offerItemsList.push({"item_id":i.id,"offer_id":Offer.id,"quantity":i.Iquantity})))
      const data={
        "id": Offer.id,
        "name": name,
        "photo": imgbase64,
        "description": description,
        "price": price,
        "status": "on-menu",
        "orders_number": 0,
        "offer_item": offerItemsList,
        "order_offer": []
      }
      console.log(data);
      if(name==""||imgbase64==""||description==""||price<1){
        toast({
          title: 'Fill all the information !',
          /*description: "Fill all the information",*/
          position:'top-right',
          status: 'error',
          duration: 3000,
          isClosable: false,
        })
      }else if(OfferItems==[]){
        toast({
          title: 'Choose Items for the Offer !',
          /*description: "Fill all the information",*/
          position:'top-right',
          status: 'error',
          duration: 3000,
          isClosable: false,
        })
      }else if(price>OfferTotal){
        toast({
          title:'price must be less the the total price !',
          /*description: "Fill all the information",*/
          position:'top-right',
          status: 'error',
          duration: 3000,
          isClosable: false,
        })
      }else{
        axios.put(variables.API_URL+"Offer",data)
        .then((result)=>{
          toast({
            title: 'Offer Edited Successfully',
            position:'top-right',
            status: 'success',
            duration: 3000,
            isClosable: false,
          })
        }).catch((error)=>{
          toast({
            title: "Something went wrong!",
            position:'top-right',
            status: 'error',
            duration: 3000,
            isClosable: false,
          })
        })
        setOfferItems([])
        setOfferTotal(0)
        setOffer({"id":0,"name":"","img":"","description":"","price":0})
      }

    };

  //upload img file
  const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      500,
      500,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

  const onChangeImg = async (event) => {
    try {
      const file = event.target.files[0];
      const image = await resizeFile(file);
      console.log(image);
      setImageBase64(image);
      onChangeOffer("img",image)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=> {

    setDate(format(new Date(), 'dd/MM/yyyy'))
    setName(Offer.name);
    setImageBase64(Offer.img);
    setdescription(Offer.description);
    setPrice(Offer.price);
    },[]);

    return ( 
        <div className="ms-lg-5">
        <h4>Edit Offer</h4>
          <h5>{Offer.id}</h5>
        <div className="row">
        <div className="cForm col-lg-7 col-md-11 ms-3">
          <label for="fileInput">Select an Image : &nbsp;</label>
          <input type="file" id="fileInput" onChange={(e)=>{onChangeImg(e)}} className="mb-3" name="file" accept=".jpg, .jpeg, .png, image/*" /><br />
          {imgbase64!="" && <img src={imgbase64} alt="" className="AddOfferBoxImg rounded"/>}<br/>
{/*imgbase64!="" && 
<ImgCropper image={imgbase64} SetCrop={SetCrop} />
    */}
          <TextField onChange={(e)=>{setName(e.target.value);onChangeOffer("name",e.target.value)}} value={Offer.name} id="filled-basic"  className="my-2" label="Name" variant="outlined" /><br />
          <TextField onChange={(e)=>{setdescription(e.target.value);onChangeOffer("description",e.target.value)}} value={Offer.description} id="filled-basic" className="my-2" label="Description" variant="outlined" /><br />
          <TextField onChange={(e)=>{setPrice(e.target.value);onChangeOffer("price",e.target.value)}} value={Offer.price} id="filled-basic" className="my-2" type="number" label="Price" variant="outlined" /><br />
        </div>
        <div className="col-lg-4 col-md-11 ms-md-4 col-sm-11 ms-sm-3 col-xs-11 ">
          <Link to="/OfferList/AddEditOffer/ChooseItems" className="btn btn-primary text-secondary mb-2">Choose Items</Link>
        <div className="p-3 text-black bg-secondary rounded">
                <div className="OrderListStaff d-flex justify-content-between">
                <p>{date}</p>
                <h4>Offer Items List</h4>
                <div class="dropdown">
                    <div class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <MoreVertIcon className="icon"/>
                    </div>
                    <ul class={`dropdown-menu bg-gray`}>
                        {OfferTotal>0 && <li><a class="dropdown-item rounded-bottom" onClick={()=>window.print("OrderListStaff")} href="#"><PrintIcon/> print</a></li>}
                    </ul>
                </div>
                </div>
              <hr />
              <table className='table'>
                <thead>
                  <th>item</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>total</th>
                </thead>
              {
                OfferItems.map(s => (
                    <tr>
                      <td>{s.name}</td>
                      <td>{s.price}$</td>
                      <td>{s.Iquantity}</td>
                      <td>{(s.Iquantity*s.price).toFixed(2)}$</td>
                    </tr>
                ))
                }
              </table>
              <hr />
              <h4>Total Price : {OfferTotal.toFixed(2)}$</h4>
            </div>
            </div>
        </div>

        <div className="cForm">
          {name==""||imgbase64==""||price==0||OfferItems==[]||price>OfferTotal?
          <button onClick={()=>EditOffer()} type="button" className="btn btn-primary btn-lg m-3">
            Edit
          </button>
          :
          <Link to="/OfferList" onClick={()=>EditOffer()} type="button" className="btn btn-primary text-light btn-lg  m-3">
            Edit
          </Link>
          }
          <Link to="/OfferList" onClick={()=>{setOfferItems([]);setOfferTotal(0);setOffer({})}} class="btn btn-secondary btn-lg m-3">
            Back to List
          </Link>
        </div>
      </div>
     );
}

export default EditOffer;