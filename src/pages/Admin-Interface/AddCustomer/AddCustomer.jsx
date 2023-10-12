import React from "react";
import "./AddCustomer.css";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

function AddCustomer(){
    return (
      <div className="pagesContent mt-3">
        <h4>ADD Customer</h4>
        <div class="cForm">
        <TextField className="my-2" id="outlined-basic" label="Full Name" variant="outlined" /><br/>
        <TextField className="my-2" id="outlined-basic" label="Phone Number" variant="outlined" />
        <p>Choose Roll:</p>
        <input type="radio" id="Member" name="fav_language" value="Member"/>
        <label for="Member">MU Member</label>
        <input type="radio" id="Staff" className="ms-5" name="fav_language" value="Staff"/>
        <label for="Staff">MU Staff</label>
        </div>

        <div className="customer">
          <button type="button" class="btn btn-primary btn-lg m-3">
            Add
          </button>
          <Link to="/CustomerList" class="btn btn-secondary btn-lg m-3">
            Back to List
          </Link>
        </div>
      </div>
    );
}

export default AddCustomer;
