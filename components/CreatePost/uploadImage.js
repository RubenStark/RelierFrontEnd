import { useState } from "react";
import style from "../../styles/Create.module.css"

function UploadImage() {

    const [images, setImages] = useState(null);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImages(e.target.files[0]);
        }
    };

    return (
        // Left part of the createPost Page
        <div className="h-full w-full flex justify-center items-center bg-white">

            <div>

                {
                    !images &&
                    <label htmlFor="file-upload">
                        <div className={style.btn}>Upload a Photo</div>
                    </label>
                }

                <input id="file-upload" type="file" accept="image/*" required className="hidden" onChange={handleChange} multiple />
            </div>

            {images && <img className="Create-Image-Preview" src={URL.createObjectURL(images)} alt="Preview" />}

        </div>
    )

}

export default UploadImage