export default function useImageUploader() {
    const [images, setImages] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);
  
    const handleChange = (e) => {
      setImages(Array.from(e.target.files));
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    };

    useEffect(() => {
      console.log(images);
    }, [images]);
  
    return {
      images,
      imageUrl,
      handleChange,
    };
  }