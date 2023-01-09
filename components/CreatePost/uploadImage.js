import { useEffect, useState } from "react";
import style from "../../styles/Create.module.css"

function UploadImage() {

    const [images, setImages] = useState();
    const [image, setImage] = useState();

    const handleChange = (e) => {
        setImages(Array.from(event.target.files))
        setImage(URL.createObjectURL(e.target.files[0]))
    };

    const handleImageClick = (e) => {
        setImage(e.target.src)
    };

    useEffect(() => {
        console.log(images)
    }, [images]);

    return (
        <>
            <div className="h-full w-full bg-white grid grid-rows-6">

                <div className="row-span-5 flex justify-center items-center">

                    {
                        !images &&
                        <label htmlFor="file-upload">
                            <div className={style.btn}>Upload a Photo</div>
                        </label>
                    }

                    {
                        image && <img src={image} alt="image" />
                    }

                    <input id="file-upload" type="file" accept="image/*" required className="hidden" onChange={handleChange} multiple />
                </div>

                {/* Carrusel */}
                <div className="w-full row-span-1 flex justify-center gap-1 bg-cover">

                    {images?.map((image) => (
                        <img
                            className="h-full w-32 object-cover"
                            key={image.name}
                            src={URL.createObjectURL(image)}
                            alt={image.name}
                            onClick={handleImageClick}
                        />
                    ))}

                </div>
            </div>
        </>
    )

}

export default UploadImage