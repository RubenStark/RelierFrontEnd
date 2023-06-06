import { useEffect, useState } from "react";
import style from "../../styles/Create.module.css";
import useImageUploader from "../../hooks/useImageUpload";

function UploadImage({ image, imageUrl, clearImages, handleImageChange }) {
  

  return (
    <>
      <div className="h-full w-full bg-white grid grid-rows-6 xl:ml-52">
        <div className="row-span-5 flex justify-center items-center">
          {!image && (
            <label htmlFor="file-upload">
              <div className={style.btn}>Upload a Photo</div>
            </label>
          )}

          {imageUrl && <img src={imageUrl} alt="image" className="w-full max-w-xl md:max-w-4xl"/>}

          <input
            id="file-upload"
            type="file"
            accept="image/*"
            required
            className="hidden"
            onChange={handleImageChange}
            multiple
          />
        </div>

        {/* Carrusel */}
        {/* <div className="w-full row-span-1 flex justify-center gap-1 bg-cover">

                    {images?.map((image) => (
                        <img
                            className="h-full w-32 object-cover"
                            key={image.name}
                            src={URL.createObjectURL(image)}
                            alt={image.name}
                            onClick={handleImageClick}
                        />
                    ))}

                </div> */}
      </div>
    </>
  );
}

export default UploadImage;
