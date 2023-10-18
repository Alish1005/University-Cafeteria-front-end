import React, { useEffect, useState } from "react";
import "./AddItems.css";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { variables } from "../../Variables";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";




function AddItems(){
  const [sections,setSections]=useState([]);
  const url=variables.API_URL;

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

    return (
      <div className="">
        <h4>ADD Item </h4>
        <div className="cForm">
          <label for="fileInput">Select an Image : &nbsp;</label>
          <input type="file" id="fileInput" className="mb-3" name="file" accept=".jpg, .jpeg, .png, image/*" /><br />
          <TextField id="filled-basic"  className="my-2" label="Name" variant="outlined" /><br />
          <TextField id="filled-basic" className="my-2" label="Component" variant="outlined" /><br />
          <label>Choose Food Section:</label>
          <select className="form-select align-center mt-3"  style={{width:"200px",marginLeft:"42%"}} label="Section">
            {sections.map(data=>(
                    <option value={data.id}>{data.name}</option>
            ))}
          </select><br/>
          <TextField id="filled-basic" className="my-2" type="number" label="Price" variant="outlined" /><br />
          <TextField id="filled-basic" className="my-2" type="number" label="Quantity" variant="outlined" /><br />
          <TextField id="filled-basic" className="my-1" type="number" label="Calories" variant="outlined" /><br />
        </div>
        <div className="cForm">
          <button type="button" className="btn btn-primary btn-lg ">
            Add
          </button>
          <Link to="/itemManagment" class="btn btn-secondary btn-lg m-3">
            Back to List
          </Link>
          <ToastContainer/>
        </div>
      </div>
    );
}

export default AddItems;
