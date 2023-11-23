import React, { useEffect, useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Resizer from "react-image-file-resizer";
import "./profilePage.css";
import profileIcon from "../../../assets/profileIcon.png";

function ProfilePage() {
  const [imgbase64, setImageBase64] = useState(""); //set encoded img

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        500,
        500,
        "JPEG",
        20,
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
    <div className="profilePage">
      <h3 className="Profile">Profile</h3>
      <div className="col-span-full">
        <label
          for="fileInput"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          <img src={profileIcon} width={"80px"}></img>
        </label>
        <div className="mt-2 flex items-center gap-x-3">
          {/* <UserCircleIcon
            className="h-12 w-12 text-gray-300"
            aria-hidden="true"
            
          /> */}
          <input
            type="file"
            id="fileInput"
            onChange={(e) => onChangeImg(e)}
            className="mb-3"
            name="file"
            accept=".jpg, .jpeg, .png, image/*"
          />
          {imgbase64 != "" && (
            <img
              src={imgbase64}
              alt=""
              className="AddItemBoxImg rounded"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
          )}
        </div>
      </div>

      <div className="border-b border-gray-900/10 pb-12">
        <h4 className="text-base font-semibold leading-7 text-gray-900 mb-5">
          Personal Information
        </h4>
        <form>
          <div class="form-row">
            <div class="form-group col-md-3 FName">
              <input
                type="text"
                class="form-control"
                id="FName"
                placeholder="First Name"
              ></input>
            </div>
            <div class="form-group col-md-3">
              <input
                type="text"
                class="form-control"
                id="LName"
                placeholder="Last Name"
              ></input>
            </div>
          </div>

          <div className="form-row">
            <div class="form-group col-md-3 email">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
              ></input>
            </div>

            <div class="form-group col-md-3 phone">
              <input
                type="text"
                class="form-control"
                id="PhoneNb"
                placeholder="Phone Number"
              ></input>
            </div>
          </div>

          <div className="form-row">
            <div class="form-group col-md-3 Room">
              <input
                type="text"
                class="form-control"
                id="Room"
                maxLength={4}
                placeholder="Room Number"
              ></input>
            </div>

            <div class="form-group col-md-3 Building">
              <input
                type="text"
                class="form-control"
                id="Building"
                maxLength={1}
                placeholder="Building Block"
              ></input>
            </div>
          </div>

          <button
            type="submit"
            className="btn-send btn btn-primary text-center p-3 save"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
