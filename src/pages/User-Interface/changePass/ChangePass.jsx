import React from "react";
import "./ChangePass.css";
function ChangePassword(){
    return (
      <div className="UserContent">
        <div className="label">
          <label className="ChangePass">Change Password</label>
        </div>

        <div className="changePassBox">
          <div className="mb-3 row input1 ">
            <div className="col-sm-4 ">
              <input
                type="password"
                className="form-control1"
                id="OldPass"
                placeholder="Enter your old password"
              ></input>
            </div>
          </div>
          <div className="mb-3 row input1">
            <div className="col-sm-4 ">
              <input
                type="password"
                className="form-control1"
                id="inputPassword"
                placeholder="Enter your new password"
              ></input>
            </div>
          </div>
          <div className="mb-3 row input1">
            <div className="col-sm-4 ">
              <input
                type="password"
                className="form-control1"
                id="ConfirmPassword"
                placeholder="confirm your password"
              ></input>
            </div>
          </div>
        </div>
        <div className="SignButton1">
          <button type="button" className="btn btn-primary btn-lg mt-4">
            Confirm
          </button>
        </div>
      </div>
    );
  }
export default ChangePassword;
