import React, { useEffect, useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Resizer from "react-image-file-resizer";
import "./profilePage.css";
import profileIcon from "../../../assets/profileIcon.png";
import { FaUserEdit } from "react-icons/fa";
import "@fontsource/poppins";
import { FaUser } from "react-icons/fa";

function ProfilePage() {
  const [imgbase64, setImageBase64] = useState(""); //set encoded img

  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({
    FName: "",
    LName: "",
    email: "",
    PhoneNb: "",
    Room: "",
    Building: "",
  });
  const [placeholderAbove, setPlaceholderAbove] = useState(false);

  // Function to handle changes in the input fields
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleEditClick = () => {
    setEditable(!editable);
  };

  const handleInputClick = () => {
    setPlaceholderAbove(true);
  };

  const handleInputBlur = () => {
    if (
      formData.FName === "" ||
      formData.LName === "" ||
      formData.email === "" ||
      formData.PhoneNb === "" ||
      formData.Room === "" ||
      formData.Building === ""
    ) {
      setPlaceholderAbove(false);
    }
  };

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
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        setImageBase64("");
      }
      console.log(image);
      setImageBase64(image);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profilePage">
      <div className="col-span-full">
        <label
          for="fileInput"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          <img id="profileIcon" src={profileIcon} width={"80px"}></img>
        </label>
        <div className="mt-2 flex items-center gap-x-3 picContainer">
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
              {/* <FaUser /> */}
              <div
                className={`input-container ${
                  placeholderAbove ? "input-focused" : ""
                }`}
              >
                <label
                  htmlFor="FName"
                  className={`placeholder ${
                    placeholderAbove || formData.FName !== "" ? "above" : ""
                  }`}
                >
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="FName"
                  value={formData.FName}
                  placeholder=""
                  readOnly={!editable}
                  onChange={handleInputChange}
                  onClick={handleInputClick}
                  onBlur={handleInputBlur}
                ></input>
              </div>
            </div>

            <div class="form-group col-md-3 LName">
              {/* <FaUser /> */}
              <div
                className={`input-container ${
                  placeholderAbove ? "input-focused" : ""
                }`}
              >
                <label
                  htmlFor="LName"
                  className={`placeholder ${
                    placeholderAbove || formData.LName !== "" ? "above" : ""
                  }`}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="LName"
                  value={formData.LName}
                  placeholder=""
                  readOnly={!editable}
                  onChange={handleInputChange}
                  onClick={handleInputClick}
                  onBlur={handleInputBlur}
                ></input>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div class="form-group col-md-3 email">
              {/* <FaUser /> */}
              <div
                className={`input-container ${
                  placeholderAbove ? "input-focused" : ""
                }`}
              >
                <label
                  htmlFor="email"
                  className={`placeholder ${
                    placeholderAbove || formData.email !== "" ? "above" : ""
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  value={formData.email}
                  placeholder=""
                  readOnly={!editable}
                  onChange={handleInputChange}
                  onClick={handleInputClick}
                  onBlur={handleInputBlur}
                ></input>
              </div>
            </div>

            <div class="form-group col-md-3 phone">
              <div
                className={`input-container ${
                  placeholderAbove ? "input-focused" : ""
                }`}
              >
                <label
                  htmlFor="PhoneNb"
                  className={`placeholder ${
                    placeholderAbove || formData.PhoneNb !== "" ? "above" : ""
                  }`}
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="PhoneNb"
                  value={formData.PhoneNb}
                  placeholder=""
                  readOnly={!editable}
                  onChange={handleInputChange}
                  onClick={handleInputClick}
                  onBlur={handleInputBlur}
                ></input>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div class="form-group col-md-3 Room">
              <div
                className={`input-container ${
                  placeholderAbove ? "input-focused" : ""
                }`}
              >
                <label
                  htmlFor="Room"
                  className={`placeholder ${
                    placeholderAbove || formData.Room !== "" ? "above" : ""
                  }`}
                >
                  Room Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="Room"
                  value={formData.Room}
                  maxLength={4}
                  placeholder=""
                  readOnly={!editable}
                  onChange={handleInputChange}
                  onClick={handleInputClick}
                  onBlur={handleInputBlur}
                ></input>
              </div>
            </div>

            <div class="form-group col-md-3 Building">
              <div
                className={`input-container ${
                  placeholderAbove ? "input-focused" : ""
                }`}
              >
                <label
                  htmlFor="Building"
                  className={`placeholder ${
                    placeholderAbove || formData.Building !== "" ? "above" : ""
                  }`}
                >
                  Building Block
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="Building"
                  value={formData.Building}
                  maxLength={1}
                  placeholder=""
                  readOnly={!editable}
                  onChange={handleInputChange}
                  onClick={handleInputClick}
                  onBlur={handleInputBlur}
                ></input>
              </div>
            </div>
          </div>

          <button
            type="button"
            id="editProfile"
            class="btn  btn-sm"
            data-mdb-ripple-init
            onClick={handleEditClick}
          >
            {editable ? "Save" : "Edit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
