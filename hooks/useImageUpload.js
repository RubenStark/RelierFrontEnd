import { useEffect, useState } from "react";

export default function useImageUploader() {
    const [images, setImages] = useState([]);
    const [image, setImage] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);
  
    const handleImageChange = (e) => {
      setImages(Array.from(e.target.files));
      setImage(Array.from(e.target.files)[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    };

    const clearImages = () => {
      setImages([]);
      setImage([]);
      setImageUrl(null);
    }

    useEffect(() => {
      console.log(images);
    }, [images]);
  
    return {
      images,
      imageUrl,
      image,
      clearImages,
      handleImageChange,
    };
  }