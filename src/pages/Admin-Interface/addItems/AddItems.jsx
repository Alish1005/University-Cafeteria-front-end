import React, { useEffect, useState } from "react";
import "./AddItems.css";
import TextField from '@mui/material/TextField';
import { Link, resolvePath } from "react-router-dom";
import { variables } from "../../Variables";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import ImgCropper from "../../../components/ImgCropper/ImgCropper";
import { useToast } from '@chakra-ui/react'

function AddItems(){
  const toast = useToast()
  //attrb.
  const [imgCrop,setImgCrop]=useState({"height":0,"width":0,"x":0,"y":0}); //set encoded img
  const [sections,setSections]=useState([]); //array of Sections
  const url=variables.API_URL;

  const [imgbase64,setImageBase64]=useState(""); //set encoded img
  const [name,setName]=useState(""); //set encoded img
  const [component,setComponent]=useState(""); //set encoded img
  const [sectionId,setSectionId]=useState(-1); //set encoded img
  const [price,setPrice]=useState(""); //set encoded img
  const [quantity,setQuantity]=useState(0); //set encoded img
  const [calories,setCalories]=useState(0); //set encoded img



  //refresh
  const refresh=()=>{
    axios.get(variables.API_URL+"Item/Sections")
    .then((data)=>{
      setSections(data.data);
      console.log(data.data);
    });
  }
  useEffect(()=>{
    refresh();
    return()=>{
      
    }
  },[]);
  
  //Cropper
  const SetCrop=(x,y)=>{
    setImgCrop({x,y})
  }

  //Actions
  //OnClick Add Item
  const onClickAddItem = () => {
    const data={"id": 0,
    "name": name,
    "photo": imgbase64,
    "description": component,
    "quantity": quantity,
    "calories": calories,
    "orders_number": 0,
    "status": "on-menu",
    "section_id": sectionId,
    "price": price,
    };
    if(name==""||imgbase64==""||component==""||sectionId==-1||price==0||calories==0){
      toast({
        title: 'Fill all the information !',
        /*description: "Fill all the information",*/
        position:'top-right',
        status: 'error',
        duration: 3000,
        isClosable: false,
      })
    }else{
      axios.post(variables.API_URL+"Item",data)
      .then((result)=>{
        toast({
          title: 'Item Added Successfully',
          /*description: "Fill all the information",*/
          position:'top-right',
          status: 'success',
          duration: 3000,
          isClosable: false,
        })
      }).catch((error)=>{
        toast({
          title: error,
          /*description: "Fill all the information",*/
          position:'top-right',
          status: 'error',
          duration: 3000,
          isClosable: false,
        })
      })
    }
  }
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
    } catch (err) {
      console.log(err);
    }
  };



    return (
      <div className="">
        <h4>ADD Item</h4>
        <div className="cForm">
          <label for="fileInput">Select an Image : &nbsp;</label>
          <input type="file" id="fileInput" onChange={(e)=>onChangeImg(e)} className="mb-3" name="file" accept=".jpg, .jpeg, .png, image/*" /><br />
          <img src={imgbase64} alt="" className="rounded" style={{width:"400px"}}/><br/>

{/*imgbase64!="" && 
<ImgCropper image={imgbase64} SetCrop={SetCrop} />
    */}


          <TextField onChange={(e)=>setName(e.target.value)} value={name} id="filled-basic"  className="my-2" label="Name" variant="outlined" /><br />
          <TextField onChange={(e)=>setComponent(e.target.value)} value={component} id="filled-basic" className="my-2" label="Component" variant="outlined" /><br />
          <select onChange={(e)=>setSectionId(e.target.value)} value={sectionId} className="form-select align-center mt-3"  style={{width:"200px",marginLeft:"42%"}} label="Section">
          <option  value={-1}>Choose Section</option>
            {sections.map(data=>(
                    <option value={data.id}>{data.name}</option>
            ))}
          </select><br/>
          <TextField onChange={(e)=>setPrice(e.target.value)} value={price} id="filled-basic" className="my-2" type="number" label="Price" variant="outlined" /><br />
          <TextField onChange={(e)=>setQuantity(e.target.value)} value={quantity} id="filled-basic" className="my-2" type="number" label="Quantity" variant="outlined" /><br />
          <TextField onChange={(e)=>setCalories(e.target.value)} value={calories} id="filled-basic" className="my-1" type="number" label="Calories" variant="outlined" /><br />
        </div>
        <div className="cForm">
          {name==""||imgbase64==""||sectionId==-1||price==0||calories<0?
          <button onClick={()=>onClickAddItem()} type="button" className="btn btn-primary btn-lg ">
            Add
          </button>
          :
          <Link to={"/itemManagment"} onClick={()=>onClickAddItem()} type="button" className="btn btn-primary text-light btn-lg ">
            Add
          </Link>
          }
          <Link to="/itemManagment" class="btn btn-secondary btn-lg m-3">
            Back to List
          </Link>
        </div>
      </div>
    );
}

export default AddItems;
