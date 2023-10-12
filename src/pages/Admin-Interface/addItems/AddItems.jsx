import React, { useState } from "react";
import "./AddItems.css";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

function AddItems(){
    return (
      <div className="">
        <h4>ADD Item </h4>
        <div className="cForm">
          <label for="fileInput">Select an Image : &nbsp;</label>
          <input type="file" id="fileInput" className="mb-3" name="file" accept=".jpg, .jpeg, .png, image/*" /><br />
          <TextField id="filled-basic"  className="my-2" label="Name" variant="outlined" /><br />
          <TextField id="filled-basic" className="my-2" label="Component" variant="outlined" /><br />
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
        </div>
      </div>
    );
}

export default AddItems;
