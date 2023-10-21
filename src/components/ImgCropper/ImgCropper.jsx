import Cropper from 'react-easy-crop'
import React, { useEffect, useState,useCallback } from "react";
import "./ImgCropper.css"
const CONTAINER_HEIGHT = 300

function ImgCropper({image},{SetCrop}) {
    //CROP
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
    //SetCrop(croppedArea,croppedAreaPixels);
}, [])
    

    return ( 
        <div className="CropperImgComponent">
<Cropper
      image={image}
      crop={crop}
      zoom={zoom}
      aspect={4 / 3}
      onCropChange={setCrop}
      /*onCropComplete={onCropComplete}*/
      onZoomChange={setZoom}
    />
    <button onClick={onCropComplete} className='Cropbtn btn btn-lg btn-secondary'>Crop</button>
        </div>
     );
}

export default ImgCropper;