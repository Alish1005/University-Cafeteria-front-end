import React from "react";
import "./AddStaff.css";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

function AddStaff() {
    return (
<div className="pagesContent mt-3">
        <h4>ADD Staff</h4>
        <div class="cForm">
        <TextField className="my-2" id="outlined-basic" label="Full Name" variant="outlined" /><br/>
        <TextField className="my-2" id="outlined-basic" label="Phone Number" variant="outlined" /><br/>
        <TextField className="my-2" id="outlined-basic" type="number" label="Salary" variant="outlined" />
        </div>

        <div className="customer">
          <button type="button" class="btn btn-primary btn-lg m-3">
            Add
          </button>
          <Link to="/StaffList" class="btn btn-secondary btn-lg m-3">
            Back to List
          </Link>
        </div>
      </div>
    );
  }


export default AddStaff;
